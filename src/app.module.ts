import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { NoticiaModule } from './noticia/noticia.module';

@Module({
  imports: [DatabaseModule, NoticiaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
