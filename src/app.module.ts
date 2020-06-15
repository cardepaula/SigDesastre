import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { NoticiaModule } from './noticia/noticia.module';
import { TweetsModule } from './tweets/tweets.module';
import { RSSModule } from './rss/rss.module';
import { AuthModule } from './auth/auth.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
@Module({
  imports: [
    DatabaseModule,
    NoticiaModule,
    TweetsModule,
    RSSModule,
    AuthModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
