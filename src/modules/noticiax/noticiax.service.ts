import { Injectable, Inject } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { repositoryConfig } from '../../common/config/repositories.config';
import { Repository } from 'typeorm';
import { Noticia } from '../../database/entities/noticia.entity';

@Injectable()
export class NoticiaxService extends TypeOrmCrudService<Noticia> {
  constructor(
    @Inject(repositoryConfig.noticia)
    private readonly noticiaRepository: Repository<Noticia>,
  ) {
    super(noticiaRepository)
  }
}
