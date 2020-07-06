import { Controller } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { MidiaDto, CreateMidiaDto, UpdateMidiaDto } from './dto/index';
import { Midia } from '../../database/entities/midia.entity';
import { MidiaService } from './midia.service';

@Crud({
  model: {
    type: MidiaDto,
  },
  dto: {
    create: CreateMidiaDto,
    update: UpdateMidiaDto,
  }
})
@ApiUseTags('Midia')
@Controller('midia')
export class MidiaController implements CrudController<Midia> {
  constructor(public service: MidiaService) {}

  get base(): CrudController<Midia> {
    return this;
  }}
