import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';
import { TipoFonteDto } from '../../tipoFonte/dto/index';
import { Assunto } from '../../../database/entities/assunto.entity';
import { Descritor } from '../../../database/entities/descritor.entity';

export class CreateFonteDto {

  @ApiModelPropertyOptional({
    description: 'Nome da fonte',
  })
  @IsOptional()
  @IsString()
  nome?: string;

  @ApiModelPropertyOptional({
    description: 'URL da fonte',
  })
  @IsOptional()
  @IsString()
  link?: string;

  @ApiModelPropertyOptional({
    description: 'Descrição da fonte',
  })
  @IsOptional()
  @IsString()
  descricao?: string;

  @ApiModelProperty({
    description: 'Tipo da fonte',
    type: TipoFonteDto,
  })
  tipoFonte: TipoFonteDto;

  @ApiModelPropertyOptional({
    description: 'Assutos relacionados a fonte',
    isArray: true,
    type: Assunto,
  })
  @IsOptional()
  assuntos?: Assunto[];

  @ApiModelPropertyOptional({
    description: 'Descritores relacionados a fonte',
    isArray: true,
    type: Descritor,
  })
  @IsOptional()
  descritores?: Descritor[];

}
