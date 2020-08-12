import { Module } from '@nestjs/common';
import { TweetInfoController } from './tweetInfo.controller';
import { TweetInfoService } from './tweetInfo.service';
import { DatabaseModule } from '../../database/database.module';
import { NoticiaxModule } from '../noticiax/noticiax.module';

@Module({
  imports: [DatabaseModule, NoticiaxModule],
  controllers: [TweetInfoController],
  providers: [TweetInfoService],
})
export class TweetInfoModule {}
