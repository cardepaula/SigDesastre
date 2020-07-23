import { Module } from '@nestjs/common';
import { FonteController } from './fonte.controller';
import { FonteService } from './fonte.service';
import { DatabaseModule } from '../../database/database.module';
import { TipoFonteModule } from '../tipoFonte/tipoFonte.module';

@Module({
  imports: [DatabaseModule, TipoFonteModule],
  controllers: [FonteController],
  providers: [FonteService],
  exports: [FonteService]
})
export class FonteModule {}
