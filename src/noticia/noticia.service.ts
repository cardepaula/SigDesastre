import { Injectable, Inject } from '@nestjs/common';
import { Noticia } from '../database/entities/noticia.entity';
import { Repository } from 'typeorm';
import { repositoryConfig } from '../common/config/repositories.config';
import { NoticiaInterface } from './noticia.interface';

@Injectable()
export class NoticiaService {
  constructor(
    @Inject(repositoryConfig.noticia)
    private readonly noticiaRepository: Repository<Noticia>,
  ) {}

  async searchNoticias(query: NoticiaInterface) {
    let id: string;
    let titulo: string;
    let conteudo: string;
    let fonte: string;
    let grupoAcesso: string;
    let qtdNoticias: number;
    let pagina: number;

    query.id ? (id = query.id) : (id = '%');

    query.titulo ? (titulo = `%${query.titulo}%`) : (titulo = '%');
    titulo = titulo.replace(' ', '%');

    query.conteudo ? (conteudo = `%${query.conteudo}%`) : (conteudo = '%');
    conteudo = conteudo.replace(' ', '%');

    query.fonte ? (fonte = `${query.fonte}`) : (fonte = '%');
    fonte = fonte.replace(' ', '%');

    query.grupoAcesso
      ? (grupoAcesso = `${query.grupoAcesso}`)
      : (grupoAcesso = '%');

    query.qtdNoticias ? (qtdNoticias = query.qtdNoticias) : (qtdNoticias = 10);

    query.pagina ? (pagina = query.pagina - 1) : (pagina = 0);

    const noticias: Noticia[] = await this.noticiaRepository
      .createQueryBuilder('noticia')
      .select()
      .leftJoinAndSelect('noticia.descritores', 'descritor')
      .leftJoinAndSelect('noticia.fonte', 'fonte')
      .leftJoinAndSelect('noticia.grupoAcesso', 'grupoacesso')
      .leftJoinAndSelect('noticia.midias', 'midia')
      .where('noticia.id::TEXT ILIKE :id', { id })
      .andWhere('noticia.titulo ILIKE :titulo', {
        titulo,
      })
      .andWhere('noticia.conteudo ILIKE :conteudo', {
        conteudo,
      })
      .andWhere('fonte.nome ILIKE :fonte', {
        fonte,
      })
      .andWhere('grupoAcesso.nome ILIKE :grupoAcesso', {
        grupoAcesso,
      })
      .take(qtdNoticias)
      .skip(pagina)
      .cache(false)
      .getMany();
    return noticias;
  }
}
