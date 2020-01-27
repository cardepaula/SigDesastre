import { Module } from '@nestjs/common';
import { TweetsController } from './tweets.controller';
import { DatabaseModule } from 'src/database/database.module';
import { TweetsService } from './tweets.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TweetsController],
  providers: [TweetsService]
})
export class TweetsModule {}
