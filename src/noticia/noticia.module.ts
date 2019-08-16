import { Module } from '@nestjs/common';
import { NoticiaController } from './noticia.controller';
import { NoticiaService } from './noticia.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [NoticiaController],
  providers: [NoticiaService],
})
export class NoticiaModule {}
