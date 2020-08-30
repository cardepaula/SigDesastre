import { ApiModelProperty } from '@nestjs/swagger';

export class TipoMidiaDto {
  @ApiModelProperty({
    description: 'Identificador do Tipo Mídia',
  })
  id: number;

  @ApiModelProperty({
    description: 'Nome do Tipo Mídia',
  })
  nome: string;
}
