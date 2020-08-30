import { Module } from '@nestjs/common';
import { MidiaService } from './midia.service';
import { MidiaController } from './midia.controller';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [MidiaService],
  controllers: [MidiaController],
})
export class MidiaModule {}
