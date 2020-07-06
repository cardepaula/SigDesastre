import { Module } from '@nestjs/common';
import { NoticiaxController } from './noticiax.controller';
import { NoticiaxService } from './noticiax.service';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [NoticiaxController],
  providers: [NoticiaxService]
})
export class NoticiaxModule {}
