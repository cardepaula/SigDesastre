import { ApiModelProperty } from '@nestjs/swagger';

export class RSSDto {

  @ApiModelProperty({
    description:'Identificador do RSS',
  })
  id: number;

  @ApiModelProperty({
    description: 'Nome da fonte RSS',
  })
  nome: string;

  @ApiModelProperty({
    description: 'Url do RSS da fonte',
  })
  url: string;

  @ApiModelProperty({
    description: 'Tipo da Fonte',
  })
  tipoFonteId: number;

}
