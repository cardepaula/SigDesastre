import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsDefined } from 'class-validator';

export class CreateGrupoAcessoDto {
  @ApiModelProperty({
    description: 'Descrição do grupo de acesso',
    required: true,
  })
  @IsString()
  @IsDefined()
  nome: string ;
}
