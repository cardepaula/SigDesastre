import { IsInt, IsDefined, IsString, IsOptional } from 'class-validator';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { AssuntoDto } from '../../assunto/dto';
import { UsuarioDto } from '../../usuario/dto';

export class UpdateInteresseDto {
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

  @ApiModelPropertyOptional({
    description: 'Identificador do assunto.',
    type: () => AssuntoDto,
  })
  @IsOptional()
  assunto: AssuntoDto;

  @ApiModelPropertyOptional({
    description: 'Identificador do interesse.',
    type: () => UsuarioDto,
  })
  @IsOptional()
  usuario: UsuarioDto;
}
