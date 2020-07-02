import {
  Controller,
  Get,
  Body,
  Post,
  Query,
  Param,
  HttpStatus,
  Delete,
} from '@nestjs/common';
import {
  ApiUseTags,
  ApiResponse,
  ApiImplicitQuery,
  ApiImplicitParam,
  ApiImplicitBody,
} from '@nestjs/swagger';
import { NoticiaService } from './noticia.service';
import { Noticia } from '../database/entities/noticia.entity';
import { NoticiaDto } from './dto/noticia.dto';

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
    status: HttpStatus.OK,
    description: 'Noticias Filtradas',
  })
  @Get()
  public search(@Query() query) {
    return this.noticiaService.searchNews(query);
  }

  @ApiImplicitParam({
    name: 'pagina',
    description: 'numero da pagina a qual deseja visualizar',
    required: true,
    type: Number,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Noticias paginadas',
  })
  @Get('/pagina/:pagina')
  public getByPage(@Query() query, @Param() param: { pagina: number }) {
    return this.noticiaService.searchNewsByPage(query, param.pagina);
  }

  @ApiImplicitParam({
    name: 'id',
    description: 'id da noticia que deseja visualizar',
    required: true,
    type: Number,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Noticia',
  })
  @Get('/id/:id')
  async getNewsById(@Query() query, @Param() param) {
    return await this.noticiaService.getNewsById(query, param.id);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Noticia',
  })
  @Get('recentes')
  async getLastWeeksNews(@Query() query, @Param() param) {
    return await this.noticiaService.getLastWeeksNews();
  }

  @ApiResponse({
    status: 201,
    description: 'Noticia Created',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiImplicitBody({
    name: 'NoticiaDto',
    required: true,
    type: NoticiaDto,
  })
  @Post()
  public async postNews(@Body() body: Noticia) {
    return await this.noticiaService.saveOrUpdateNews(body);
  }

  @ApiResponse({
    status: 201,
    description: 'Deleted',
  })
  @ApiResponse({ status: 403, description: 'Noticia existente.' })
  @ApiImplicitBody({ name: 'NoticiaDto', required: true, type: NoticiaDto })
  @Delete('/id/:id')
  public async deleteNews(@Param() param) {
    return await this.noticiaService.DeleteNews(param.id);
  }

  @ApiResponse({
    status: 201,
    description: 'OK',
  })
  @Get('/fontes')
  public async getTipoFonte() {
    return await this.noticiaService.getTipoFonte();
  }
  @ApiResponse({
    status: 201,
    description: 'OK',
  })
  @Get('/nuvem')
  public async getNuvem() {
    return await this.noticiaService.getNumevemPalavras();
  }
}
