import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsDefined, IsString, IsIn, IsOptional } from 'class-validator';
import { TipoFonteDto } from '../../tipoFonte/dto/index';

export class UpdateFonteDto {
  @ApiModelProperty({
    description: 'Identificador da fonte',
    required: true,
  })
  @IsInt()
  @IsDefined()
  id: number;

  @ApiModelPropertyOptional({
    description: 'Nome da fonte',
  })
  @IsOptional()
  @IsString()
  nome: string;

  @ApiModelPropertyOptional({
    description: 'URL da fonte',
  })
  @IsOptional()
  @IsString()
  link: string;

  @ApiModelPropertyOptional({
    description: 'Descrição da fonte',
  })
  @IsOptional()
  @IsString()
  descricao: string;

  @ApiModelPropertyOptional({
    description: 'Tipo da fonte',
    type: TipoFonteDto,
  })
  @IsOptional()
  tipoFonte: TipoFonteDto;
}
