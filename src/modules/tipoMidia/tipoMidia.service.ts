import { Injectable, Inject } from '@nestjs/common';
import { TipoMidia } from '../../database/entities/tipoMidia.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { repositoryConfig } from '../../common/config/repositories.config';
import { Repository } from 'typeorm';

@Injectable()
export class TipoMidiaService extends TypeOrmCrudService<TipoMidia> {
  constructor(
    @Inject(repositoryConfig.tipoMidia)
    private readonly tipoMidiaRepository: Repository<TipoMidia>,
  ) {
    super(tipoMidiaRepository);
  }
}
