import { Module } from '@nestjs/common';
import { GrupoAcessoController } from './grupoAcesso.controller';
import { GrupoAcessoService } from './grupoAcesso.service';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [GrupoAcessoService],
  controllers: [GrupoAcessoController],
})
export class GrupoAcessoModule {}
