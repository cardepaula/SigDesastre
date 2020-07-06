import { Injectable, Inject } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { GrupoAcesso } from '../../database/entities/grupoAcesso.entity';
import { Repository } from 'typeorm';
import { repositoryConfig } from '../../common/config/repositories.config';

@Injectable()
export class GrupoAcessoService extends TypeOrmCrudService<GrupoAcesso> {
  constructor(
    @Inject(repositoryConfig.grupoAcesso)
    private readonly tweetsRepository: Repository<GrupoAcesso>,
  ) {
    super(tweetsRepository);
  }
}
