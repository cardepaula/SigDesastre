import { RSSService } from './rss.service';
import { Controller } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { CreateRSSDto, RSSDto, UpdateRSSDto } from './dto';
import { RSS } from '../../database/entities/rss.entity';

@Crud({
  model: {
    type: RSSDto,
  },
  dto: {
    create: CreateRSSDto,
    update: UpdateRSSDto,
  },
})
@ApiUseTags('rss')
@Controller('rss')
export class RSSController implements CrudController<RSS> {
  constructor(public service: RSSService) {}

  get base(): CrudController<RSS> {
    return this;
  }
}
