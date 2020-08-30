import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { TipoFonte } from '../../database/entities/tipoFonte.entity';
import {
  CreateTipoFonteDto,
  UpdateTipoFonteDto,
  TipoFonteDto,
} from './dto';
import { ApiUseTags } from '@nestjs/swagger';
import { TipoFonteService } from './tipoFonte.service';

@Crud({
  model: {
    type: TipoFonteDto,
  },
  query: {
    join: {
      fonte: {
        eager: false,
      },
    },
  },
  dto: {
    create: CreateTipoFonteDto,
    update: UpdateTipoFonteDto,
  },
  routes: {
    exclude: ['replaceOneBase'],
  },
})
@ApiUseTags('Tipos Fontes')
@Controller('tipos-fontes')
export class TipoFonteController implements CrudController<TipoFonte> {
  constructor(public service: TipoFonteService) {}

  get base(): CrudController<TipoFonte> {
    return this;
  }
}
