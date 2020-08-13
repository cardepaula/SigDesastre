import { ApiModelPropertyOptional, ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsIn, IsInt, IsDefined, IsOptional } from 'class-validator';
import { NoticiaDto } from '../../noticiax/dto';
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
  @IsOptional()
  @IsString()
  nome: string;

  @ApiModelPropertyOptional({
    description: 'URL da mídia',
  })
  @IsString()
  @IsOptional()
  link: string;

  @ApiModelPropertyOptional({
    description: 'Noticia relacionada a mídia',
    type: () => NoticiaDto,
  })
  @IsOptional()
  noticia: NoticiaDto;

  @ApiModelPropertyOptional({
    description: 'Tipo da mídia',
    type: TipoMidiaDto,
  })
  @IsOptional()
  tipoMidia: TipoMidiaDto;
}
