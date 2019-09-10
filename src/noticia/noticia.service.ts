import { Injectable, Inject } from '@nestjs/common';
import { Noticia } from '../database/entities/noticia.entity';
import { Repository } from 'typeorm';
import { repositoryConfig } from '../common/config/repositories.config';
import { NoticiaParams } from './noticiaParams';

@Injectable()
export class NoticiaService {
  constructor(
    @Inject(repositoryConfig.noticia)
    private readonly noticiaRepository: Repository<Noticia>,
  ) {}

  async searchNoticias(query: NoticiaParams) {
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
      .skip(params.pagina)
      .cache(false)
      .getMany();
    // .getQueryAndParameters();
    return noticias;
  }
}
