import { Module } from '@nestjs/common';
import { TipoFonteService } from './tipoFonte.service';
import { TipoFonteController } from './tipoFonte.controller';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [TipoFonteService],
  controllers: [TipoFonteController],
  exports: [TipoFonteService],
})
export class TipoFonteModule {}
