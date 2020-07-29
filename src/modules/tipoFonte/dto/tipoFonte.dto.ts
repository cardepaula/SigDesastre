import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { FonteDto } from '../../fonte/dto/index';

export class TipoFonteDto {
  @ApiModelProperty({
    description: 'Identificador do tipo fonte',
  })
  id: number;

  @ApiModelProperty({
    description: 'Nome do tipo fonte',
  })
  nome: string;
}
