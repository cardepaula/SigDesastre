import { ApiModelPropertyOptional, ApiModelProperty } from '@nestjs/swagger';
import { IsInt, IsDefined, IsString, IsArray } from 'class-validator';
import { UpdateFonteDto } from '../../fonte/dto/index';
import { UpdateDescritorDto } from '../../descritor/dto/index';

export class UpdateAssuntoDto {
  @ApiModelProperty({
    description: 'Identificador do assunto',
  })
  @IsInt()
  @IsDefined()
  id: number;

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
    type: UpdateFonteDto,
    isArray: true
  })
  @IsArray()
  fontes: UpdateFonteDto[];

  @ApiModelPropertyOptional({
    description: 'Descritores relacionado ao assunto',
    type: UpdateDescritorDto,
    isArray: true
  })
  @IsArray()
  descritores: UpdateDescritorDto[];
}
