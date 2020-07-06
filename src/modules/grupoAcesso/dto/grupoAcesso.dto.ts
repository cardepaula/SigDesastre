import { ApiModelProperty } from '@nestjs/swagger';

export class GrupoAcessoDto {
  @ApiModelProperty({
    description: 'Identificador do grupo de acesso',
  })
  id: number;

  @ApiModelProperty({
    description: 'Descrição do grupo de acesso',
  })
  nome: string ;
}
