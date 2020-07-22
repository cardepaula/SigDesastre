import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { IsString, MaxLength, IsNumber, IsDefined, IsInt, IsOptional } from 'class-validator';

export class UpdateRSSDto {
  @ApiModelProperty({
    description: 'Identificador do RSS',
  })
  @IsInt()
  @IsDefined()
  id: number;

  @ApiModelPropertyOptional({
    description: 'Nome da fonte RSS',
    type: 'string',
  })
  @IsOptional()
  @IsString()
  @MaxLength(240)
  nome: string;

  @ApiModelPropertyOptional({
    description: 'Url do RSS da fonte',
    type: 'string',
  })
  @IsOptional()
  @IsString()
  @MaxLength(240)
  url: string;

  @ApiModelPropertyOptional({
    description: 'Tipo da Fonte',
    type: 'number',
  })
  @IsOptional()
  @IsNumber()
  tipoFonteId: number;
}
