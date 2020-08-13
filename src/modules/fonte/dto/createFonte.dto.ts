import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';
import { TipoFonteDto } from '../../tipoFonte/dto/index';
import { AssuntoDto } from '../../assunto/dto/index';
import { DescritorDto } from '../../descritor/dto/index';

export class CreateFonteDto {
  @ApiModelProperty({
    description: 'Nome da fonte',
  })
  @IsString()
  nome: string;

  @ApiModelProperty({
    description: 'URL da fonte',
  })
  @IsString()
  link: string;

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
    type: () => AssuntoDto,
  })
  @IsOptional()
  assuntos?: AssuntoDto[];

  @ApiModelPropertyOptional({
    description: 'Descritores relacionados a fonte.',
    type: () => DescritorDto,
    isArray: true,
  })
  descritores?: DescritorDto[];
}
