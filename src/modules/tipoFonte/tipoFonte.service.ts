import { Injectable, Inject } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { TipoFonte } from '../../database/entities/tipoFonte.entity';
import { repositoryConfig } from '../../common/config/repositories.config';
import { Repository } from 'typeorm';

@Injectable()
export class TipoFonteService extends TypeOrmCrudService<TipoFonte> {
  constructor(
    @Inject(repositoryConfig.tipoFonte)
    private readonly tipoFonteRepository: Repository<TipoFonte>,
  ) {
    super(tipoFonteRepository)
  }
}
