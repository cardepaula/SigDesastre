import { Injectable, Inject } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Fonte } from '../../database/entities/fonte.entity';
import { repositoryConfig } from '../../common/config/repositories.config';
import { Repository } from 'typeorm';

@Injectable()
export class FonteService extends TypeOrmCrudService<Fonte> {
  constructor(
    @Inject(repositoryConfig.fonte)
    private readonly fonteRepository: Repository<Fonte>,
  ) {
    super(fonteRepository);
  }
}
