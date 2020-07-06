import { ApiModelPropertyOptional, ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsIn, IsInt, IsDefined } from 'class-validator';
import { NoticiaDto } from '../../noticiax/dto/index';
import { TipoMidiaDto } from '../../tipoMidia/dto/tipoMidia.dto';

export class UpdateMidiaDto {
  @ApiModelProperty({
    description: 'Identificador da midia',
  })
  @IsInt()
  @IsDefined()
  id: number;

  @ApiModelPropertyOptional({
    description: 'Nome da mídia',
  })
  @IsString()
  nome: string;

  @ApiModelPropertyOptional({
    description: 'URL da mídia',
  })
  @IsString()
  @IsDefined()
  link: string;

  @ApiModelPropertyOptional({
    description: 'Noticia relacionada a mídia',
    type: NoticiaDto,
  })
  @IsDefined()
  noticia: NoticiaDto;

  @ApiModelPropertyOptional({
    description: 'Tipo da mídia',
    type: TipoMidiaDto,
  })
  @IsDefined()
  tipoMidia: TipoMidiaDto;
}
