import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsDefined, IsString } from 'class-validator';

export class UpdateGrupoAcessoDto {
  @ApiModelProperty({
    description: 'Identificador do grupo de acesso',
    required: true,
  })
  @IsInt()
  @IsDefined()
  id: number;

  @ApiModelProperty({
    description: 'Descrição do grupo de acesso',
    required: true,
  })
  @IsString()
  @IsDefined()
  nome: string ;

}
