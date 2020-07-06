import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { IsString, IsDefined } from 'class-validator';
import { GrupoAcessoDto } from '../../grupoAcesso/dto/index';
import { InteresseDto } from '../../interesse/dto/index';

export class CreateUsuarioDto {
  @ApiModelProperty({
    description: 'Nome do usuario',
  })
  @IsString()
  @IsDefined()
  nome: string;

  @ApiModelProperty({
    description: 'Email do usuario',
  })
  @IsString()
  @IsDefined()
  email: string;

  @ApiModelProperty({
    description: 'Senha do usuario',
  })
  @IsString()
  @IsDefined()
  senha: string;

  @ApiModelProperty({
    description: 'Grupo de acesso que o usuario pertence',
    type: GrupoAcessoDto,
  })
  grupoAcesso: GrupoAcessoDto;

  // @ApiModelPropertyOptional({
  //   description: 'Interesses do usuario',
  //   type: InteresseDto,
  //   isArray: true
  // })
  // interesses: InteresseDto[];
}
