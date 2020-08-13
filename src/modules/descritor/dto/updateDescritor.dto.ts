import { ApiModelPropertyOptional, ApiModelProperty } from '@nestjs/swagger';
import { AssuntoDto } from '../../assunto/dto/index';
import { NoticiaDto } from '../../noticiax/dto/index';
import { FonteDto } from '../../fonte/dto/index';
import {
  IsInt,
  IsDefined,
  IsString,
  IsArray,
  IsOptional,
} from 'class-validator';

export class UpdateDescritorDto {
  @ApiModelProperty({
    description: 'Identificador do descritor',
  })
  @IsInt()
  @IsDefined()
  id: number;

  @ApiModelPropertyOptional({
    description: 'Nome do descritor',
  })
  @IsOptional()
  @IsString()
  nome: string;

  @ApiModelPropertyOptional({
    description: 'Assuntos relacionados ao descritor.',
    type: () => AssuntoDto,
    isArray: true,
  })
  @IsOptional()
  @IsArray()
  assuntos: AssuntoDto[];

  @ApiModelPropertyOptional({
    description: 'Fontes relacionados ao descritor.',
    type: () => FonteDto,
    isArray: true,
  })
  fontes: FonteDto[];

  @ApiModelPropertyOptional({
    description: 'Noticias relacionados ao descritor.',
    type: () => NoticiaDto,
    isArray: true,
  })
  @IsOptional()
  @IsArray()
  noticias: NoticiaDto[];
}
