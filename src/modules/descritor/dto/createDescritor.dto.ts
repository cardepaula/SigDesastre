import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { IsDefined, IsString, IsArray, IsOptional } from 'class-validator';
import { AssuntoDto } from '../../assunto/dto/index';
import { NoticiaDto } from '../../noticiax/dto/index';
import { FonteDto } from '../../fonte/dto/index';

export class CreateDescritorDto {
  @ApiModelProperty({
    description: 'Nome do descritor',
  })
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

  @ApiModelProperty({
    description: 'Noticias relacionados ao descritor.',
    type: () => NoticiaDto,
    isArray: true,
  })
  @IsArray()
  @IsDefined()
  noticias: NoticiaDto[];
}
