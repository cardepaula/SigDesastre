import { Module } from '@nestjs/common';
import { TipoMidiaController } from './tipoMidia.controller';
import { TipoMidiaService } from './tipoMidia.service';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TipoMidiaController],
  providers: [TipoMidiaService],
})
export class TipoMidiaModule {}
