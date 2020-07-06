import { Module } from '@nestjs/common';
import { InteresseController } from './interesse.controller';
import { InteresseService } from './interesse.service';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [InteresseController],
  providers: [InteresseService]
})
export class InteresseModule {}
