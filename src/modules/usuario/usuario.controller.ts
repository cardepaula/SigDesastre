import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { ApiUseTags } from '@nestjs/swagger';
import { UsuarioDto, CreateUsuarioDto, UpdateUsuarioDto } from './dto/index';
import { Usuario } from '../../database/entities/usuario.entity';
import { UsuarioService } from './usuario.service';

@Crud({
  model: {
    type: UsuarioDto,
  },
  dto: {
    create: CreateUsuarioDto,
    update: UpdateUsuarioDto,
  },
  query: {
    exclude: ['senha'],
    join: {
      grupoAcesso: {
        eager: true,
      },
      interesses: {
        eager: false,
      },
    },
  },
  routes: {
    exclude: ['createManyBase', 'replaceOneBase', 'deleteOneBase'],
  },
})
@ApiUseTags('Usuario')
@Controller('usuario')
export class UsuarioController implements CrudController<Usuario> {
  constructor(public service: UsuarioService) {}

  get base(): CrudController<Usuario> {
    return this;
  }
}
