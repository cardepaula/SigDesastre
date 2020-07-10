import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { AssuntoDto, CreateAssuntoDto, UpdateAssuntoDto } from './dto';
import { ApiUseTags } from '@nestjs/swagger';
import { Assunto } from '../../database/entities/assunto.entity';
import { AssuntoService } from './assunto.service';

@Crud({
  model: {
    type: AssuntoDto,
  },
  query: {
    join: {
      fontes: {
        eager: false,
      },
      'fontes.tipoFonte': {
        eager: true
      },
      interesses: {
        eager: false,
      },
      descritores: {
        eager: false,
      },
      'descritores.noticia': {
        eager: false,
      }
    },
  },
  dto: {
    create: CreateAssuntoDto,
    update: UpdateAssuntoDto,
  },
})
@ApiUseTags('Assuntos')
@Controller('assuntos')
export class AssuntoController implements CrudController<Assunto> {
  constructor(public service: AssuntoService) {}

  get base(): CrudController<Assunto> {
    return this;
  }
}
