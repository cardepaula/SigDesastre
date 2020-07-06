import { ApiModelProperty } from '@nestjs/swagger';
import { IsInt, IsDefined, IsString } from 'class-validator';

export class CreateTipoMidiaDto {
  @ApiModelProperty({
    description: 'Identificador do Tipo Mídia',
  })
  @IsInt()
  @IsDefined()
  id: number;

  @ApiModelProperty({
    description: 'Nome do Tipo Mídia',
  })
  @IsString()
  @IsDefined()
  nome: string;
}
