import { ApiModelPropertyOptional } from '@nestjs/swagger';
import { FonteDto } from '../../fonte/dto';
import { DescritorDto } from '../../descritor/dto';
import { IsString, IsArray, IsOptional } from 'class-validator';

export class CreateAssuntoDto {
  @ApiModelPropertyOptional({
    description: 'Nome do assunto',
  })
  @IsOptional()
  @IsString()
  nome: string;

  @ApiModelPropertyOptional({
    description: 'Descrição do assunto',
  })
  @IsOptional()
  @IsString()
  descricao: string;

  @ApiModelPropertyOptional({
    description: 'Fontes relacionados ao assunto',
    type: () => FonteDto,
    isArray: true,
  })
  @IsOptional()
  @IsArray()
  fontes: FonteDto[];

  @ApiModelPropertyOptional({
    description: 'Descritores relacionado ao assunto',
    type: () => DescritorDto,
    isArray: true,
  })
  @IsOptional()
  @IsArray()
  descritores: DescritorDto[];
}
