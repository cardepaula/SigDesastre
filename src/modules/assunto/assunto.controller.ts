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
  dto: {
    create: CreateAssuntoDto,
    update: UpdateAssuntoDto,
  },
})
@ApiUseTags('Assunto')
@Controller('assunto')
export class AssuntoController implements CrudController<Assunto> {
  constructor(public service: AssuntoService) {}

  get base(): CrudController<Assunto> {
    return this;
  }
}
