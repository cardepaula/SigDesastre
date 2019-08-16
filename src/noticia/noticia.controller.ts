import { Controller, Get } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { NoticiaService } from './noticia.service';

@ApiUseTags('Noticias')
@Controller('noticias')
export class NoticiaController {
  constructor(private readonly noticiaService: NoticiaService) {}

  @Get('')
  public findAll() {
    return this.noticiaService.findAll();
  }
}
