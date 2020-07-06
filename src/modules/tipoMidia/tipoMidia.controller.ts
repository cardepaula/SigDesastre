import { Controller } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { TipoMidiaDto, CreateTipoMidiaDto, UpdateTipoMidiaDto } from './dto/index';
import { TipoMidia } from '../../database/entities/tipoMidia.entity';
import { TipoMidiaService } from './tipoMidia.service';

@Crud({
  model: {
    type: TipoMidiaDto,
  },
  dto: {
    create: CreateTipoMidiaDto,
    update: UpdateTipoMidiaDto,
  },
})
@ApiUseTags('TipoMidia')
@Controller('tipo-midia')
export class TipoMidiaController implements CrudController<TipoMidia> {
  constructor(public service: TipoMidiaService) {}

  get base(): CrudController<TipoMidia> {
    return this;
  }
}
