import { Inject, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { repositoryConfig } from '../../common/config/repositories.config';
import { Repository } from 'typeorm';
import { RSS } from '../../database/entities/rss.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class RSSService extends TypeOrmCrudService<RSS> {
  constructor(
    @Inject(repositoryConfig.rss)
    private readonly RSSRepository: Repository<RSS>,
  ) {
    super(RSSRepository);
  }
}
