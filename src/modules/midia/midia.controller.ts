import { Controller } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { MidiaDto, CreateMidiaDto, UpdateMidiaDto } from './dto';
import { Midia } from '../../database/entities/midia.entity';
import { MidiaService } from './midia.service';

@Crud({
  model: {
    type: MidiaDto,
  },
  query: {
    join: {
      tipoMidia: {
        eager: true,
      },
    },
  },
  dto: {
    create: CreateMidiaDto,
    update: UpdateMidiaDto,
  },
})
@ApiUseTags('Midias')
@Controller('midias')
export class MidiaController implements CrudController<Midia> {
  constructor(public service: MidiaService) {}

  get base(): CrudController<Midia> {
    return this;
  }}
