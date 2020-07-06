import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { NoticiaDto } from '../../noticiax/dto/index';
import { TipoMidiaDto } from '../../tipoMidia/dto/tipoMidia.dto';
import { IsString, IsOptional, IsDefined } from 'class-validator';

export class CreateMidiaDto {

  @ApiModelPropertyOptional({
    description: 'Nome da mídia',
  })
  @IsString()
  nome: string;

  @ApiModelProperty({
    description: 'URL da mídia',
  })
  @IsString()
  @IsDefined()
  link: string;

  @ApiModelProperty({
    description: 'Noticia relacionada a mídia',
    type: NoticiaDto,
  })
  @IsDefined()
  noticia: NoticiaDto;

  @ApiModelProperty({
    description: 'Tipo da mídia',
    type: TipoMidiaDto,
  })
  @IsDefined()
  tipoMidia: TipoMidiaDto;
}
