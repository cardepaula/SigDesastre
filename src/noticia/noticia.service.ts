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

  async findAll() {
    return await this.noticiaRepository.find({
      // relations: ['fonte', 'grupoAcesso', 'descritores', 'midias'],
      cache: false, // 60000 == 1 min
    });
  }

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
    query.conteudo ? (conteudo = `%${query.conteudo}%`) : (conteudo = '%');
    query.fonte ? (fonte = `${query.fonte}`) : (fonte = '%');
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
      .where('noticia.id::TEXT LIKE :id', { id })
      .andWhere('LOWER(noticia.titulo) LIKE LOWER(:titulo)', {
        titulo,
      })
      .andWhere('LOWER(noticia.conteudo) LIKE LOWER(:conteudo)', {
        conteudo,
      })
      .andWhere('LOWER(fonte.nome) LIKE LOWER(:fonte)', {
        fonte,
      })
      .andWhere('LOWER(grupoAcesso.nome) LIKE LOWER(:grupoAcesso)', {
        grupoAcesso,
      })
      .take(qtdNoticias)
      .skip(pagina)
      .getMany();
    return noticias;
  }
}
