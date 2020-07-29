import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { NoticiaDto } from '../../noticiax/dto/noticia.dto';
import { TipoMidiaDto } from '../../tipoMidia/dto/tipoMidia.dto';

export class MidiaDto {
  @ApiModelProperty({
    description: 'Identificador da midia',
  })
  id: number;

  @ApiModelPropertyOptional({
    description: 'Nome da mídia',
  })
  nome: string;

  @ApiModelProperty({
    description: 'URL da mídia',
  })
  link: string;

  @ApiModelProperty({
    description: 'Noticia relacionada a mídia',
    type: () => NoticiaDto,
  })
  noticia: NoticiaDto;

  @ApiModelProperty({
    description: 'Tipo da mídia',
    type: () => TipoMidiaDto,
  })
  tipoMidia: TipoMidiaDto;
}
