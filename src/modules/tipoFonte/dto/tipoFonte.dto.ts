import { ApiModelProperty } from '@nestjs/swagger';

export class TipoFonteDto {
  @ApiModelProperty({
    description: 'Identificador do tipo fonte'
  })
  id: number;

  @ApiModelProperty({
    description: 'Nome do tipo fonte'
  })
  nome: string;
}
