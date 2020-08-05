import { Controller, UseInterceptors, Get, HttpStatus } from '@nestjs/common';
import {
  Crud,
  CrudController,
  Override,
  ParsedRequest,
  CrudRequest,
  ParsedBody,
  CrudRequestInterceptor,
} from '@nestjsx/crud';
import { NoticiaDto, CreateNoticiaDto, UpdateNoticiaDto } from './dto';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { Noticia } from '../../database/entities/noticia.entity';
import { NoticiaxService } from './noticiax.service';
import { ConverteDataEntradaInterceptor } from '../../interceptors/converteDataEntrada.interceptor';
import { ConverteDataSaidaInterceptor } from '../../interceptors/converteDataSaida.interceptor';
import { NuvemPalavraDto } from './dto/nuvemPalavras.dto';

@Crud({
  model: {
    type: NoticiaDto,
  },
  query: {
    persist: ['dataPublicacao'],
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
  routes: {
    exclude: ['createManyBase'],
  },
})
@ApiUseTags('Noticias - v2')
@Controller('v2/noticias')
@UseInterceptors(ConverteDataEntradaInterceptor, ConverteDataSaidaInterceptor)
export class NoticiaxController implements CrudController<Noticia> {
  constructor(public service: NoticiaxService) {}

  get base(): CrudController<Noticia> {
    return this;
  }

  @Override()
  public async createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: CreateNoticiaDto,
  ): Promise<Noticia> {
    const response = await this.service.create(req, dto);
    return response;
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get Nuvem Response',
    type: NuvemPalavraDto,
    isArray: true,
  })
  @Get('/nuvem')
  public async getNuvem(): Promise<NuvemPalavraDto[]> {
    return await this.service.getNumevemPalavras();
  }
}
