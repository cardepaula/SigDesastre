import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { GrupoAcessoDto } from '../../grupoAcesso/dto/index';
import { InteresseDto } from '../../interesse/dto/index';
import {
  IsInt,
  IsDefined,
  IsString,
  IsOptional,
  IsEmail,
} from 'class-validator';

export class UpdateUsuarioDto {
  @ApiModelProperty({
    description: 'Identificador do Usuario',
  })
  @IsInt()
  @IsDefined()
  id: number;

  @ApiModelPropertyOptional({
    description: 'Nome do usuario',
  })
  @IsString()
  @IsOptional()
  nome: string;

  @ApiModelPropertyOptional({
    description: 'E-mail do usuario',
  })
  @IsEmail()
  @IsOptional()
  email: string;

  @ApiModelPropertyOptional({
    description: 'Senha do usuario',
  })
  @IsString()
  @IsOptional()
  senha: string;

  @ApiModelPropertyOptional({
    description: 'Grupo de acesso que o usuario pertence',
    type: GrupoAcessoDto,
  })
  @IsOptional()
  grupoAcesso: GrupoAcessoDto;

  @ApiModelPropertyOptional({
    description: 'Interesses do usuario',
    type: InteresseDto,
    isArray: true,
  })
  @IsOptional()
  interesses: InteresseDto[];
}
