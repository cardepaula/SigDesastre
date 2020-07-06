import { Module } from '@nestjs/common';
import { FonteController } from './fonte.controller';
import { FonteService } from './fonte.service';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [FonteController],
  providers: [FonteService]
})
export class FonteModule {}
