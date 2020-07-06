import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import {
  CreateGrupoAcessoDto,
  GrupoAcessoDto,
  UpdateGrupoAcessoDto,
} from './dto';
import { ApiUseTags } from '@nestjs/swagger';
import { GrupoAcessoService } from './grupoAcesso.service';
import { GrupoAcesso } from '../../database/entities/grupoAcesso.entity';

@Crud({
  model: {
    type: GrupoAcessoDto,
  },
  dto: {
    create: CreateGrupoAcessoDto,
    update: UpdateGrupoAcessoDto,
  },
})
@ApiUseTags('Grupo Acesso')
@Controller('grupo-acesso')
export class GrupoAcessoController implements CrudController<GrupoAcesso> {
  constructor(public service: GrupoAcessoService) {}

  get base(): CrudController<GrupoAcesso> {
    return this;
  }
}
