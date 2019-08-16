import { Module } from '@nestjs/common';
import { NoticiaController } from './noticia.controller';
import { NoticiaService } from './noticia.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [NoticiaController],
  providers: [NoticiaService],
})
export class NoticiaModule {}
