import { Injectable, Inject } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Descritor } from '../../database/entities/descritor.entity';
import { repositoryConfig } from '../../common/config/repositories.config';
import { Repository } from 'typeorm';

@Injectable()
export class DescritorService extends TypeOrmCrudService<Descritor> {
  constructor(
    @Inject(repositoryConfig.descritor)
    private readonly descritorRepository: Repository<Descritor>,
  ) {
    super(descritorRepository);
  }
}
