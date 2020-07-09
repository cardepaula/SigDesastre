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
      'fonte.tipoFonte': {
        alias: 'fonteTipoFonte',
        eager: false,
      },
      grupoAcessoDto: {
        eager: false,
      },
      midias: {
        eager: false,
      },
      'midias.tipoMidia': {
        alias: 'midiasTipoMidia',
        eager: false,
      },
      descritores: {
        eager: false,
      },
      'descritores.assunto': {
        alias: 'descritoresAssunto',
        eager: false,
      },
    },
    sort: [
      {
        field: 'dataPublicacao',
        order: 'DESC',
      },
    ],
  },
  dto: {
    create: CreateNoticiaDto,
    update: UpdateNoticiaDto,
  },
})
@ApiUseTags('Noticia/v2')
@Controller('noticia/v2')
export class NoticiaxController implements CrudController<Noticia> {
  constructor(public service: NoticiaxService) {}

  get base(): CrudController<Noticia> {
    return this;
  }
}
