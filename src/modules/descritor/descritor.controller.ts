import { Controller } from '@nestjs/common';
import {
  DescritorDto,
  CreateDescritorDto,
  UpdateDescritorDto,
} from './dto/index';
import { Crud, CrudController } from '@nestjsx/crud';
import { ApiUseTags } from '@nestjs/swagger';
import { Descritor } from '../../database/entities/descritor.entity';
import { DescritorService } from './descritor.service';

@Crud({
  model: {
    type: DescritorDto,
  },
  query: {
    join: {
      'assuntos': {
        eager: false,
      },
      'noticias': {
        eager: false,
      },
      'fontes': {
        eager: false,
      },
      'fontes.tipoFonte': {
        alias: 'fontesTipoFonte',
        eager: true,
      },
    },
  },
  dto: {
    create: CreateDescritorDto,
    update: UpdateDescritorDto,
  },
})
@ApiUseTags('Descritores')
@Controller('descritores')
export class DescritorController implements CrudController<Descritor> {
  constructor(public service: DescritorService) {}

  get base(): CrudController<Descritor> {
    return this;
  }
}
