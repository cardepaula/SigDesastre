import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { NoticiaModule } from './noticia/noticia.module';
import { TweetsModule } from './tweets/tweets.module';

@Module({
  imports: [DatabaseModule, NoticiaModule, TweetsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
