import { ApiModelProperty } from '@nestjs/swagger';
import { NoticiaDto } from '../../noticiax/dto/index';
import { Noticia } from '../../../database/entities/noticia.entity';
import { UsuarioDto } from '../../usuario/dto/index';

export class GrupoAcessoDto {
  @ApiModelProperty({
    description: 'Identificador do grupo de acesso',
  })
  id: number;

  @ApiModelProperty({
    description: 'Descrição do grupo de acesso',
  })
  nome: string;
}
