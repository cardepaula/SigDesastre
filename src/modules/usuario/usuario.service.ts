import { Injectable, Inject } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { repositoryConfig } from '../../common/config/repositories.config';
import { Repository } from 'typeorm';
import { Usuario } from '../../database/entities/usuario.entity';

@Injectable()
export class UsuarioService extends TypeOrmCrudService<Usuario> {
  constructor(
    @Inject(repositoryConfig.tipoFonte)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {
    super(usuarioRepository);
  }
}
