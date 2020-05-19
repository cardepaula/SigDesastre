import { RSSService } from './rss.service';
import {
  Get,
  Param,
  Controller,
  Post,
  Body,
  Put,
  HttpStatus,
} from '@nestjs/common';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { RSS } from '../database/entities/rss.entity';

@ApiUseTags('rss')
@Controller('rss')
export class RSSController {
  constructor(private readonly rssService: RSSService) {}
  /** GET BY ID */
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'RSS buscado por id',
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  @Get('/id/:id')
  public async getRSSById(@Param() param) {
    console.log(param);
    return await this.rssService.getRssById(param.id);
  }
  /**GET BY NAME */
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'RSS buscado por nome',
  })
  @Get('/nome/:nome')
  public async getbyname(@Param() param) {
    console.log(param);
    return await this.rssService.getRssByName(param.nome);
  }
  /** POST */
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Cria um RSS',
  })
  @Post()
  public async createRSS(@Body() body: RSS) {
    return await this.rssService.createRss(body);
  }
  /** UPDATE */
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Atualiza um RSS',
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  @Put()
  public async updateRSS(@Body() body: RSS) {
    return await this.rssService.updateRss(body);
  }
  /**GET ALL */
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Lista de RSS',
  })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  @Get()
  public async getAll() {
    return await this.rssService.getRssAll();
  }
}
