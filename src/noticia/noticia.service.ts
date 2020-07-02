import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Noticia } from '../database/entities/noticia.entity';
import { Repository } from 'typeorm';
import { repositoryConfig } from '../common/config/repositories.config';
import { NoticiaParams } from './noticiaParams';
import { TipoFonte } from '../database/entities/tipoFonte.entity';
import { Fonte } from '../database/entities/fonte.entity';
import { GrupoAcesso } from '../database/entities/grupoAcesso.entity';
import * as Moment from 'moment';
import { stopWord } from './stopwords';

@Injectable()
export class NoticiaService {
  constructor(
    @Inject(repositoryConfig.noticia)
    private readonly noticiaRepository: Repository<Noticia>,
    @Inject(repositoryConfig.tipoFonte)
    private readonly tipoFonteRepository: Repository<TipoFonte>,
    @Inject(repositoryConfig.fonte)
    private readonly fonteRepository: Repository<Fonte>,
    @Inject(repositoryConfig.grupoAcesso)
    private readonly grupoAcessoRepository: Repository<GrupoAcesso>,
  ) {}

  async searchNews(params: NoticiaParams) {
    if (params.qtdNoticias == undefined && params.pagina == undefined) {
      params.qtdNoticias = 10;
      params.pagina = 0;
    } else {
      if (params.qtdNoticias == undefined) {
        params.qtdNoticias = 10;
      } else {
        if (params.pagina == undefined) {
          params.pagina = 0;
        }
      }
    }

    // console.log(await this.getWhere(params));

    const [noticias, qtdNoticias] = await this.noticiaRepository.findAndCount({
      join: {
        alias: 'noticia',
        leftJoinAndSelect: {
          descritor: 'noticia.descritores',
          fonte: 'noticia.fonte',
          grupoacesso: 'noticia.grupoAcesso',
          midia: 'noticia.midias',
          tipoFonte: 'fonte.tipoFonte',
        },
      },
      where: await this.getWhere(params),

      skip: params.pagina * params.qtdNoticias,
      take: params.qtdNoticias,
      order: { dataPublicacao: params.ordem ? params.ordem : 'DESC' },
    });

    noticias.forEach(noticia => {
      noticia.dataAtualizacao = this.converteDataSaida(noticia.dataAtualizacao);

      noticia.dataCriacao = this.converteDataSaida(noticia.dataCriacao);
      noticia.dataPublicacao = this.converteDataSaida(noticia.dataPublicacao);
    });
    return {
      totalNoticias: qtdNoticias,
      paginaAtual: Math.ceil(params.pagina),
      totalPaginas: Math.ceil(qtdNoticias / params.qtdNoticias),
      quantidadeExibida: Math.ceil(params.qtdNoticias),
      params: {
        id: params.id,
        titulo: params.titulo,
        conteudo: params.conteudo,
        fonte: params.fonte,
        grupoAcesso: params.grupoAcesso,
        qtdNoticias: params.qtdNoticias,
        pagina: params.pagina,
        tipoFonte: params.tipoFonte,
        periodo: params.periodo,
      },
      noticias,
    };
  }

  async getWhere(query) {
    const keysPermitidas = [
      'id',
      'titulo',
      'conteudo',
      'tipoFonte',
      'fonte',
      'grupoAcesso',
      'periodo',
    ];
    let where = '';
    Object.keys(query)
      .filter(key => keysPermitidas.indexOf(key) !== -1)
      .forEach(key => {
        if (Array.isArray(query[key])) {
          where += '( ';
          where += `noticia.dataPublicacao BETWEEN '${query[key][0]}' and '${query[key][1]}'`;
          where += ') and ';
        }
        if (key == 'id') {
          where += `noticia.${key} = '${query[key]}' and `;
        }
        if (key == 'titulo' || key == 'conteudo') {
          where += `noticia.${key} ilike '%${query[key]}%' and `;
        }
        if (key == 'fonte' || key == 'grupoAcesso' || key == 'tipoFonte') {
          where += `${key}.nome ilike '%${query[key]}%' and `;
        }
      });
    return where.substr(0, where.length - 4);
  }

  async searchNewsByPage(query: NoticiaParams, page: number) {
    query.pagina = page;
    return await this.searchNews(query);
  }

  async getNewsById(query: NoticiaParams, id: string) {
    query.id = id;
    try {
      return await this.searchNews(query);
    } catch (error) {
      throw new HttpException(
        'Noticia existente: ' + error,
        HttpStatus.FORBIDDEN,
      );
    }
  }
  async DeleteNews(id: number) {
    try {
      await this.noticiaRepository.delete({ id: id });
    } catch (error) {
      console.error('Erro ao deletar:', error);
      throw new HttpException(
        'Noticia existente: ' + error,
        HttpStatus.FORBIDDEN,
      );
    }
  }
  async saveOrUpdateNews(noticia: Noticia) {
    let fonte;
    let tipoFonte;
    let grupoAcesso;
    let dbnoticia;
    try {
      dbnoticia = await this.noticiaRepository.findOne({
        titulo: noticia.titulo,
        dataPublicacao: noticia.dataPublicacao,
        conteudo: noticia.conteudo,
      });
      if (dbnoticia != undefined) {
        console.error('noticia já existe');
        throw new HttpException('Noticia existente', HttpStatus.FORBIDDEN);
      }
    } catch (error) {
      console.error(error);
      throw new HttpException('Noticia existente.', HttpStatus.FORBIDDEN);
    }
    try {
      fonte = await this.fonteRepository.findOne({ nome: noticia.fonte.nome });
    } catch (error) {
      console.error(error);
      throw new HttpException('Fonte ', HttpStatus.FORBIDDEN);
    }
    try {
      tipoFonte = await this.tipoFonteRepository.findOne({
        nome: noticia.fonte.tipoFonte.nome,
      });
    } catch (error) {
      console.error(error);
      throw new HttpException('tipoFonte ', HttpStatus.FORBIDDEN);
    }

    try {
      grupoAcesso = await this.grupoAcessoRepository.findOne({
        nome: noticia.grupoAcesso.nome,
      });
    } catch (error) {
      console.error(error);
      throw new HttpException('grupoAcesso ', HttpStatus.FORBIDDEN);
    }

    if (tipoFonte != undefined) {
      noticia.fonte.tipoFonte = tipoFonte;
    } else {
      await this.tipoFonteRepository.save(noticia.fonte.tipoFonte);
      tipoFonte = await this.tipoFonteRepository.findOne({
        nome: noticia.fonte.tipoFonte.nome,
      });
      noticia.fonte.tipoFonte = tipoFonte;
    }

    if (fonte != undefined) {
      noticia.fonte = fonte;
    } else {
      noticia.fonte.tipoFonte = tipoFonte;
      await this.fonteRepository.save(noticia.fonte);
      fonte = await this.fonteRepository.findOne({ nome: noticia.fonte.nome });
      noticia.fonte = fonte;
    }

    if (grupoAcesso != undefined) {
      noticia.grupoAcesso = grupoAcesso;
    } else {
      await this.grupoAcessoRepository.save(noticia.grupoAcesso);
      grupoAcesso = await this.grupoAcessoRepository.findOne({
        nome: noticia.grupoAcesso.nome,
      });
      noticia.grupoAcesso = grupoAcesso;
    }
    try {
      noticia.dataPublicacao = this.converteDataEntrada(noticia.dataPublicacao);
      noticia.dataAtualizacao = this.converteDataEntrada(
        noticia.dataAtualizacao,
      );
      noticia.dataCriacao = this.converteDataEntrada(noticia.dataCriacao);
    } catch (error) {
      throw new HttpException('Noticia: ' + error, HttpStatus.FORBIDDEN);
    }

    try {
      return await this.noticiaRepository.save(noticia);
    } catch (error) {
      console.error(error);

      throw new HttpException('Noticia: ' + error, HttpStatus.FORBIDDEN);
    }
  }

  async getLastWeeksNews() {
    const dataInicio = Moment()
      .subtract(7, 'days')
      .calendar();
    const dataFim = `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()}`;
    const periodo = [dataInicio, dataFim];
    const params: NoticiaParams = new NoticiaParams({ periodo });
    return this.searchNews(params);
  }
  async getTipoFonte() {
    let tipoFonte = await this.tipoFonteRepository.find();
    return tipoFonte;
  }
  async getNumevemPalavras() {
    let noticias = await this.noticiaRepository.find();
    let nuvem = [];
    let re = /[^a-zA-Z\u00C0-\u00FF]+/i;
    noticias.forEach(n => {
      let noticia;
      if (n.conteudo) {
        noticia = n.conteudo.replace(/<[^>]+>/g || /{[^>]+}/g, '');
        noticia = noticia.split(re);
        noticia = noticia.filter(c => !stopWord.includes(c));
        this.CriaListaNuvem(nuvem, noticia);
      }
    });
    nuvem.sort((a, b) => b.quantidade - a.quantidade);
    return nuvem;
  }
  CriaListaNuvem(nuvem, noticia: string[]) {
    let possui;
    noticia.map(palavra => {
      possui = false;
      for (let i = 0; i < nuvem.length; i++) {
        let item = nuvem[i];
        if (item.chave === palavra) {
          item.quantidade++;
          possui = true;
          break;
        }
      }
      if (possui == false) {
        nuvem.push({ chave: palavra, quantidade: 1 });
      }
    });
  }

  converteDataEntrada(data) {
    if (Moment(data, 'DD/MM/YYYY').isValid()) {
      data = Moment(data, 'DD/MM/YYYY').format('MM-DD-YYYY');
    } else if (Moment(data, 'DD-MM-YYYY').isValid()) {
      data = Moment(data, 'DD-MM-YYYY').format('MM-DD-YYYY');
    }
    return data;
  }
  converteDataSaida(data) {
    if (data) {
      data = Moment(new Date(data)).format('DD/MM/YYYY');
    }
    return data;
  }
}
