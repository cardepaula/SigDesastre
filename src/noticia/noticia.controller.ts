import { Controller, Get, Body, Post, Query } from '@nestjs/common';
import { ApiUseTags, ApiResponse, ApiImplicitQuery } from '@nestjs/swagger';
import { NoticiaService } from './noticia.service';

@ApiUseTags('Noticias')
@Controller('noticias')
export class NoticiaController {
  constructor(private readonly noticiaService: NoticiaService) {}

  @ApiImplicitQuery({
    name: 'id',
    description: 'Id da noticia desejada',
    required: false,
    type: Number,
    isArray: false,
    collectionFormat: 'multi',
  })
  @ApiImplicitQuery({
    name: 'titulo',
    description: 'Titulo ou parte do mesmo',
    required: false,
    type: String,
    isArray: false,
    collectionFormat: 'multi',
  })
  @ApiImplicitQuery({
    name: 'conteudo',
    description: 'palavras que deseja encontrar no conteúdo',
    required: false,
    type: String,
    isArray: false,
    collectionFormat: 'multi',
  })
  @ApiImplicitQuery({
    name: 'tipoFonte',
    description: 'filtra as notícias pelo tipo da fonte',
    required: false,
    type: String,
    isArray: false,
    collectionFormat: 'multi',
  })
  @ApiImplicitQuery({
    name: 'fonte',
    description: 'filtre noticias pela fonte (informe o nome da fonte)',
    required: false,
    type: String,
    isArray: false,
    collectionFormat: 'multi',
  })
  @ApiImplicitQuery({
    name: 'grupoAcesso',
    description:
      'encontre noticias disponiveis a um grupo especifico (informe o nome do grupo)',
    required: false,
    type: String,
    isArray: false,
    collectionFormat: 'multi',
  })
  @ApiImplicitQuery({
    name: 'periodo',
    description: `Data inicial e data final (YYYY-mm-dd)
      Padrão:
      INICIAL 2015-11-5
      FINAL ${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()}`,
    required: false,
    isArray: true,
    collectionFormat: 'multi',
  })
  @ApiImplicitQuery({
    name: 'qtdNoticias',
    description:
      'Quantidade de noticias que deseja buscar por request, por padrão o valor é 10',
    required: false,
    type: Number,
    isArray: false,
    collectionFormat: 'multi',
  })
  @ApiImplicitQuery({
    name: 'pagina',
    description: 'pagina que deseja visualizar, por padrão o valor é 1',
    required: false,
    type: Number,
    isArray: false,
    collectionFormat: 'multi',
  })
  @ApiResponse({
    status: 201,
    description: 'Noticias Filtradas',
  })
  @Get()
  public search(@Query() query) {
    return this.noticiaService.searchNoticias(query);
  }
}
