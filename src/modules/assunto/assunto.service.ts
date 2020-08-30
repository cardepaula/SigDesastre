import { Injectable, Inject } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Assunto } from '../../database/entities/assunto.entity';
import { repositoryConfig } from '../../common/config/repositories.config';
import { Repository } from 'typeorm';

@Injectable()
export class AssuntoService extends TypeOrmCrudService<Assunto> {
  constructor(
    @Inject(repositoryConfig.assunto)
    private readonly assuntoRepository: Repository<Assunto>,
  ) {
    super(assuntoRepository);
  }
}
