import { Module } from '@nestjs/common';
import { NoticiaxController } from './noticiax.controller';
import { NoticiaxService } from './noticiax.service';
import { DatabaseModule } from '../../database/database.module';
import { FonteModule } from '../fonte/fonte.module';
import { FonteService } from '../fonte/fonte.service';

@Module({
  imports: [DatabaseModule, FonteModule],
  controllers: [NoticiaxController],
  providers: [NoticiaxService]
})
export class NoticiaxModule {}
