import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { AssuntoDto } from '../../assunto/dto/index';
import { UsuarioDto } from '../../usuario/dto/index';

export class InteresseDto {
  @ApiModelProperty({
    description: 'Identificador do interesse.',
  })
  id: number;

  @ApiModelPropertyOptional({
    description: 'Descrição do interesse',
  })
  descricao: string;

  @ApiModelProperty({
    description: 'Identificador do assunto.',
    type: AssuntoDto
  })
  assunto: AssuntoDto;

  @ApiModelProperty({
    description: 'Identificador do interesse.',
    type: UsuarioDto,
  })
  usuario: UsuarioDto;
}
