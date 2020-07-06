import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { NoticiaDto, CreateNoticiaDto, UpdateNoticiaDto } from './dto';
import { ApiUseTags } from '@nestjs/swagger';
import { Noticia } from '../../database/entities/noticia.entity';
import { NoticiaxService } from './noticiax.service';

@Crud({
  model: {
    type: NoticiaDto,
  },
  query: {
    join: {
      fonte: {
        eager: true,
      },
      grupoAcessoDto: {
        eager: true,
      },
      midia: {
        eager: false,
      },
      descritor: {
        eager: false,
      },
    },
  },
  dto: {
    create: CreateNoticiaDto,
    update: UpdateNoticiaDto,
  },
})
@ApiUseTags('NoticiaX')
@Controller('noticiax')
export class NoticiaxController implements CrudController<Noticia> {
  constructor(public service: NoticiaxService) {}

  get base(): CrudController<Noticia> {
    return this;
  }
}
