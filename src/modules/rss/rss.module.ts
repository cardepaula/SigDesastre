import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { RSSController } from './rss.controller';
import { RSSService } from './rss.service';

@Module({
  imports: [DatabaseModule],
  controllers: [RSSController],
  providers: [RSSService],
})
export class RSSModule {}
