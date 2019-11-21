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

  async searchNews(query: NoticiaParams) {
    const params: NoticiaParams = new NoticiaParams(query);

    console.log(params);

    const noticias: Noticia[] = await this.noticiaRepository
      .createQueryBuilder('noticia')
      .select()
      .leftJoinAndSelect('noticia.descritores', 'descritor')
      .leftJoinAndSelect('noticia.fonte', 'fonte')
      .leftJoinAndSelect('noticia.grupoAcesso', 'grupoacesso')
      .leftJoinAndSelect('noticia.midias', 'midia')
      .leftJoinAndSelect('fonte.tipoFonte', 'tipoFonte')
      .where('noticia.id::TEXT ILIKE :id', { id: params.id })
      .andWhere('noticia.titulo ILIKE :titulo', {
        titulo: params.titulo,
      })
      .andWhere('noticia.conteudo ILIKE :conteudo', {
        conteudo: params.conteudo,
      })
      .andWhere('fonte.nome ILIKE :fonte', {
        fonte: params.fonte,
      })
      .andWhere('grupoAcesso.nome ILIKE :grupoAcesso', {
        grupoAcesso: params.grupoAcesso,
      })
      .andWhere('tipoFonte.nome ILIKE :tipoFonte', {
        tipoFonte: params.tipoFonte,
      })
      .andWhere(
        'noticia.dataPublicacao BETWEEN :dataInicio::DATE AND :dataFim::DATE',
        {
          dataInicio: params.periodo[0],
          dataFim: params.periodo[1],
        },
      )
      .take(params.qtdNoticias)
      .skip(params.pagina * params.qtdNoticias)
      .cache(false)
      .orderBy('noticia.dataAtualizacao', 'DESC', 'NULLS LAST')
      .orderBy('noticia.dataPublicacao', 'DESC', 'NULLS LAST')
      .orderBy('noticia.dataCriacao', 'DESC', 'NULLS LAST')
      .getMany();
    // .getQueryAndParameters();
    noticias.forEach(noticia => {
      // DEV
      // noticia.conteudo = `${appConfig.uri}:${appConfig.port}/noticias/id/${noticia.id}`;

      // PROD
      noticia.conteudo = `${appConfig.uri}/noticias/id/${noticia.id}`;
    });
    return noticias;
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
      fonte = await this.fonteRepository.findOne({ nome: fonte.nome });
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
