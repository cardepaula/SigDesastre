import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { CreateFonteDto, FonteDto, UpdateFonteDto } from './dto/index';
import { ApiUseTags } from '@nestjs/swagger';
import { Fonte } from '../../database/entities/fonte.entity';
import { FonteService } from './fonte.service';

@Crud({
  model: {
    type: FonteDto,
  },
  query: {
    join: {
      tipoFonte: {
        eager: false,
      },
      noticias: {
        eager: false,
      },
      assuntos: {
        eager: false,
      },
      descritores: {
        eager: false,
      },
    }
  },
  dto: {
    create: CreateFonteDto,
    update: UpdateFonteDto,
  },
})
@ApiUseTags('Fontes')
@Controller('fonte')
export class FonteController implements CrudController<Fonte> {
  constructor(public service: FonteService) {}

  get base(): CrudController<Fonte> {
    return this;
  }
}
