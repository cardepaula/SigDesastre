import { ApiModelPropertyOptional } from '@nestjs/swagger';
import { FonteDto } from '../../fonte/dto/index';
import { DescritorDto } from '../../descritor/dto/index';
import { IsString, IsArray } from 'class-validator';

export class CreateAssuntoDto {
  @ApiModelPropertyOptional({
    description: 'Nome do assunto',
  })
  @IsString()
  nome: string;

  @ApiModelPropertyOptional({
    description: 'Descrição do assunto',
  })
  @IsString()
  descricao: string;

  @ApiModelPropertyOptional({
    description: 'Fontes relacionados ao assunto',
    type: FonteDto,
    isArray: true
  })
  @IsArray()
  fontes: FonteDto[];

  @ApiModelPropertyOptional({
    description: 'Descritores relacionado ao assunto',
    type: DescritorDto,
    isArray: true
  })
  @IsArray()
  descritores: DescritorDto[];
}
