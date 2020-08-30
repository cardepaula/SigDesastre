import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { RSSController } from './rss.controller';
import { RSSService } from './rss.service';
import { TipoFonteModule } from '../tipoFonte/tipoFonte.module';

@Module({
  imports: [DatabaseModule, TipoFonteModule],
  controllers: [RSSController],
  providers: [RSSService],
})
export class RSSModule {}
