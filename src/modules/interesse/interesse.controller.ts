import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Interesse } from '../../database/entities/interesse.entity';
import { CreateInteresseDto, InteresseDto, UpdateInteresseDto } from './dto/index';
import { ApiUseTags } from '@nestjs/swagger';
import { InteresseService } from './interesse.service';

@Crud({
  model: {
    type: InteresseDto,
  },
  dto: {
    create: CreateInteresseDto,
    update: UpdateInteresseDto,
  },
  routes: {
    exclude: ['createManyBase', 'replaceOneBase'],
  },
})
@ApiUseTags('Interesse')
@Controller('interesse')
export class InteresseController implements CrudController<Interesse> {
  constructor(public service: InteresseService) {}

  get base(): CrudController<Interesse> {
    return this;
  }
}
