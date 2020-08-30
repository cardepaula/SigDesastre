import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsDefined } from 'class-validator';

export class CreateTipoFonteDto {
  @ApiModelProperty({
    description: 'Nome do tipo fonte',
    required: true,
  })
  @IsString()
  @IsDefined()
  nome: string;
}
