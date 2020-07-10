import { Controller } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import {
  TipoMidiaDto,
  CreateTipoMidiaDto,
  UpdateTipoMidiaDto,
} from './dto/index';
import { TipoMidia } from '../../database/entities/tipoMidia.entity';
import { TipoMidiaService } from './tipoMidia.service';

@Crud({
  model: {
    type: TipoMidiaDto,
  },
  query: {
    join: {
      midia: {
        eager: false,
      },
    },
  },
  dto: {
    create: CreateTipoMidiaDto,
    update: UpdateTipoMidiaDto,
  },
})
@ApiUseTags('Tipos Midia')
@Controller('tipos-midia')
export class TipoMidiaController implements CrudController<TipoMidia> {
  constructor(public service: TipoMidiaService) {}

  get base(): CrudController<TipoMidia> {
    return this;
  }
}
