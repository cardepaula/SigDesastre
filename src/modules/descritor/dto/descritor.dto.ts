import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { AssuntoDto } from '../../assunto/dto';
import { NoticiaDto } from '../../noticiax/dto';
import { FonteDto } from '../../fonte/dto';

export class DescritorDto {
  @ApiModelProperty({
    description: 'Identificador do descritor',
  })
  id: number;

  @ApiModelProperty({
    description: 'Nome do descritor',
  })
  nome: string;

  @ApiModelPropertyOptional({
    description: 'Assuntos relacionados ao descritor.',
    type: () => AssuntoDto,
    isArray: true,
  })
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
  noticias: NoticiaDto[];
}
