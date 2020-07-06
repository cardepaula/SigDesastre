import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { GrupoAcessoDto } from '../../grupoAcesso/dto/index';
import { InteresseDto } from '../../interesse/dto/index';

export class UsuarioDto {
  @ApiModelProperty({
    description: 'Identificador do Usuario',
  })
  id: number;

  @ApiModelProperty({
    description: 'Nome do usuario',
  })
  nome: string;

  @ApiModelProperty({
    description: 'email do usuario',
  })
  email: string;

  @ApiModelProperty({
    description: 'Grupo de acesso que o usuario pertence',
    type: GrupoAcessoDto,
  })
  grupoAcesso: GrupoAcessoDto;

  @ApiModelProperty({
    description: 'Interesses do usuario',
    type: InteresseDto,
    isArray: true
  })
  interesses: InteresseDto[];
}
