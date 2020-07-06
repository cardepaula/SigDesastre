import { Module } from '@nestjs/common';
import { AssuntoController } from './assunto.controller';
import { AssuntoService } from './assunto.service';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AssuntoController],
  providers: [AssuntoService]
})
export class AssuntoModule {}
