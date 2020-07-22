import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { AssuntoDto } from '../../assunto/dto/index';
import { NoticiaDto } from '../../noticiax/dto/index';
import { FonteDto } from '../../fonte/dto/index';


export class DescritorDto {
  @ApiModelProperty({
    description: 'Identificador do descritor',
  })
  id: number;

  @ApiModelProperty({
    description: 'Nome do descritor',
  })
  nome: string ;

  @ApiModelPropertyOptional({
    description: 'Assuntos relacionados ao descritor.',
    type: AssuntoDto,
    isArray: true
  })
  assuntos: AssuntoDto[];

  @ApiModelPropertyOptional({
    description: 'Noticias relacionados ao descritor.',
    type: NoticiaDto,
    isArray: true
  })
  noticias: NoticiaDto[];

  @ApiModelPropertyOptional({
    description: 'Fontes relacionadas ao descritor.',
    type: FonteDto,
    isArray: true
  })
  fontes: FonteDto[];
}
