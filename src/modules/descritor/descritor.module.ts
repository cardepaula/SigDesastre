import { Module } from '@nestjs/common';
import { DescritorService } from './descritor.service';
import { DescritorController } from './descritor.controller';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [DescritorController],
  providers: [DescritorService],
})
export class DescritorModule {}
