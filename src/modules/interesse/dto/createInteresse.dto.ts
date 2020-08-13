import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsDefined, IsString, IsOptional } from 'class-validator';
import { AssuntoDto } from '../../assunto/dto';
import { UsuarioDto } from '../../usuario/dto';

export class CreateInteresseDto {
  @ApiModelProperty({
    description: 'Identificador do interesse.',
  })
  @IsInt()
  @IsDefined()
  id: number;

  @ApiModelPropertyOptional({
    description: 'Descrição do interesse',
  })
  @IsString()
  @IsOptional()
  descricao: string;

  @ApiModelProperty({
    description: 'Identificador do assunto.',
    type: () => AssuntoDto,
  })
  @IsDefined()
  assunto: AssuntoDto;

  @ApiModelProperty({
    description: 'Identificador do interesse.',
    type: () => UsuarioDto,
  })
  @IsDefined()
  usuario: UsuarioDto;
}
