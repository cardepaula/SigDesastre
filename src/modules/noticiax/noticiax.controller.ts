import { Controller, Logger, Body, Req } from '@nestjs/common';
import {
  Crud,
  CrudController,
  Override,
  ParsedRequest,
  CrudRequest,
  ParsedBody,
  CreateManyDto,
} from '@nestjsx/crud';
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
@ApiUseTags('Noticias/v2')
@Controller('noticias/v2')
export class NoticiaxController implements CrudController<Noticia> {
  constructor(public service: NoticiaxService) {}

  get base(): CrudController<Noticia> {
    return this;
  }

  @Override()
  createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: CreateNoticiaDto,
  ) {
    const response = this.service.create(req, dto);

    return response;
  }
}
