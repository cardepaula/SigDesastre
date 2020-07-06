import { Injectable, Inject } from '@nestjs/common';
import { repositoryConfig } from '../../common/config/repositories.config';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Midia } from '../../database/entities/midia.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MidiaService extends TypeOrmCrudService<Midia> {
  constructor(
    @Inject(repositoryConfig.midia)
    private readonly midiaRepository: Repository<Midia>,
  ) {
    super(midiaRepository)
  }
}
