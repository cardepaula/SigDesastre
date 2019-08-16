import { Controller, Get, Body, Post, Query } from '@nestjs/common';
import {
  ApiUseTags,
  ApiImplicitBody,
  ApiResponse,
  ApiImplicitQuery,
} from '@nestjs/swagger';
import { NoticiaService } from './noticia.service';
import { NoticiaInterface } from './noticia.interface';

@ApiUseTags('Noticias')
@Controller('noticias')
export class NoticiaController {
  constructor(private readonly noticiaService: NoticiaService) {}

  @Get('')
  public findAll() {
    return this.noticiaService.findAll();
  }

  @ApiImplicitBody({
    name: 'Dados para filtragem da noticia',
    description: 'Aqui vc pode enviar parametros que filtrarão sua busca :)',
    type: NoticiaInterface,
    required: false,
  })
  @ApiResponse({
    status: 201,
    description: 'Noticias Filtradas',
  })
  @Get('/search')
  public search(@Query() query) {
    return this.noticiaService.searchNoticias(query);
  }
}
