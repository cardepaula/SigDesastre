import { RSSService } from './rss.service';
import { Controller } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import {
  Crud,
  CrudController,
  Override,
  CrudRequest,
  ParsedBody,
  ParsedRequest,
} from '@nestjsx/crud';
import { CreateRSSDto, RSSDto, UpdateRSSDto } from './dto';
import { RSS } from '../../database/entities/rss.entity';
import { async } from 'rxjs/internal/scheduler/async';

@Crud({
  model: {
    type: RSSDto,
  },
  query: {
    join: {
      tipoFonte: {
        eager: true,
      },
    },
  },
  dto: {
    create: CreateRSSDto,
    update: UpdateRSSDto,
  },
  routes: {
    exclude: ['replaceOneBase', 'createManyBase'],
  },
})
@ApiUseTags('RSS')
@Controller('rss')
export class RSSController implements CrudController<RSS> {
  constructor(public service: RSSService) {}

  get base(): CrudController<RSS> {
    return this;
  }

  @Override()
  public async createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: CreateRSSDto,
  ): Promise<RSS> {
    const rssCreated = await this.service.create(req, dto);
    return rssCreated;
  }
}
