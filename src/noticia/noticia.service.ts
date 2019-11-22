import { Injectable, Inject, HttpStatus } from '@nestjs/common';
import { Noticia } from '../database/entities/noticia.entity';
import { Repository } from 'typeorm';
import { repositoryConfig } from '../common/config/repositories.config';
import { NoticiaParams } from './noticiaParams';
import { appConfig } from '../common/config/app.config';
import { TipoFonte } from '../database/entities/tipoFonte.entity';
import { Fonte } from '../database/entities/fonte.entity';
import { GrupoAcesso } from '../database/entities/grupoAcesso.entity';

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
    }

    console.log(await this.getWhere(params));

    const noticias: Noticia[] = await this.noticiaRepository.find({
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
    });
    noticias.forEach(noticia => {
      noticia.conteudo = `${appConfig.uri}/noticias/id/${noticia.id}`;
    });
    return noticias;
  }

  async getWhere(query) {
    console.log(query);
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
    return this.searchNews(query);
  }

  async getNewsById(id: number) {
    const noticia: Noticia = await this.noticiaRepository.findOne(id);
    return noticia;
  }

  async saveOrUpdateNews(noticia: Noticia) {
    let fonte;
    let tipoFonte;
    let grupoAcesso;

    fonte = await this.fonteRepository.findOne({ nome: noticia.fonte.nome });
    tipoFonte = await this.tipoFonteRepository.findOne({
      nome: noticia.fonte.tipoFonte.nome,
    });
    grupoAcesso = await this.grupoAcessoRepository.findOne({
      nome: noticia.grupoAcesso.nome,
    });
    console.log(fonte, tipoFonte, grupoAcesso);

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
    return await this.noticiaRepository.save(noticia);
  }
}
