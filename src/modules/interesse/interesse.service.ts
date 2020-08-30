import { Injectable, Inject } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { repositoryConfig } from '../../common/config/repositories.config';
import { Interesse } from '../../database/entities/interesse.entity';

@Injectable()
export class InteresseService extends TypeOrmCrudService<Interesse> {
  constructor(
    @Inject(repositoryConfig.tipoFonte)
    private readonly interesseRepository: Repository<Interesse>,
  ) {
    super(interesseRepository);
  }
}
