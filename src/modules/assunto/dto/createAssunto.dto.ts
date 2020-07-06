import { ApiModelPropertyOptional } from '@nestjs/swagger';
import { FonteDto, CreateFonteDto } from '../../fonte/dto/index';
import { DescritorDto, CreateDescritorDto } from '../../descritor/dto/index';
import { InteresseDto } from '../../interesse/dto/index';
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
    type: CreateFonteDto,
    isArray: true
  })
  @IsArray()
  fontes: CreateFonteDto[];

  @ApiModelPropertyOptional({
    description: 'Descritores relacionado ao assunto',
    type: CreateDescritorDto,
    isArray: true
  })
  @IsArray()
  descritores: CreateDescritorDto[];
}
