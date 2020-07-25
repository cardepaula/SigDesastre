import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Tweets } from '../../database/entities/tweets.entity';
import { repositoryConfig } from '../../common/config/repositories.config';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class TweetsService extends TypeOrmCrudService<Tweets> {
  constructor(
    @Inject(repositoryConfig.tweets)
    private readonly tweetsRepository: Repository<Tweets>,
  ) {
    super(tweetsRepository);
  }
}
