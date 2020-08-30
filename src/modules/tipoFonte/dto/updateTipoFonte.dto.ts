import { ApiModelProperty } from '@nestjs/swagger';
import { IsInt, IsDefined, IsString } from 'class-validator';

export class UpdateTipoFonteDto {
  @ApiModelProperty({
    description: 'Identificador do tipo fonte',
    required: true,
  })
  @IsInt()
  @IsDefined()
  id: number;

  @ApiModelProperty({
    description: 'Nome do tipo fonte',
    required: true,
  })
  @IsString()
  @IsDefined()
  nome: string;
}
