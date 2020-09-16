import { Module } from '@nestjs/common';
import { TweetParametrosBuscaController } from './tweetParametrosBusca.controller';
import { TweetParametrosBuscaService } from './tweetParametrosBusca.service';
import { DatabaseModule } from '../../database/database.module';
import { DescritorModule } from '../descritor/descritor.module';

@Module({
  imports: [DatabaseModule, DescritorModule],
  controllers: [TweetParametrosBuscaController],
  providers: [TweetParametrosBuscaService],
})
export class TweetParametrosBuscaModule {}
