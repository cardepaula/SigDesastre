import { Inject, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { repositoryRSSConfig } from '../common/config/repositories.config';
import { Repository } from 'typeorm';
import { RSS } from '../database/entities/rss.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class RSSService extends TypeOrmCrudService<RSS> {
  constructor(
    @Inject(repositoryRSSConfig.rss)
    private readonly RSSRepository: Repository<RSS>,
  ) {
    super(RSSRepository);
  }
}
