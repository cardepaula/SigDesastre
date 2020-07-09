import { IsInt, IsDefined } from 'class-validator';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { TipoFonteDto } from '../../tipoFonte/dto/index';
import { NoticiaDto } from '../../noticiax/dto/index';
import { Assunto } from '../../../database/entities/assunto.entity';
import { Descritor } from '../../../database/entities/descritor.entity';
import { AssuntoDto } from '../../assunto/dto/index';
import { DescritorDto } from '../../descritor/dto/index';

export class FonteDto {
  @ApiModelProperty({
    description: 'Identificador da fonte',
  })
  id: number;

  @ApiModelPropertyOptional({
    description: 'Nome da fonte',
  })
  nome: string;

  @ApiModelPropertyOptional({
    description: 'URL da fonte',
  })
  link: string;

  @ApiModelPropertyOptional({
    description: 'Descrição da fonte',
  })
  descricao: string;

  @ApiModelProperty({
    description: 'Tipo da fonte',
    type: TipoFonteDto,
  })
  tipoFonte: TipoFonteDto;

  @ApiModelProperty({
    description: 'Noticias da fonte',
    isArray: true,
    type: NoticiaDto,
  })
  noticias: NoticiaDto[];

  @ApiModelProperty({
    description: 'Assutos relacionados a fonte',
    isArray: true,
    type: AssuntoDto,
  })
  assuntos: AssuntoDto[];

  @ApiModelProperty({
    description: 'Descritores relacionados a fonte',
    isArray: true,
    type: DescritorDto,
  })
  descritores: DescritorDto[];
}
