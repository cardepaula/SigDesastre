import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  MaxLength,
  IsDefined,
  IsInt,
  IsOptional,
} from 'class-validator';
import { TipoFonteDto } from '../../tipoFonte/dto';

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

  @ApiModelProperty({
    description: 'Tipo da Fonte',
    type: () => TipoFonteDto,
  })
  @IsOptional()
  tipoFonte: TipoFonteDto;
}
