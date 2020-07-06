import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { FonteDto } from '../../fonte/dto/index';
import { DescritorDto } from '../../descritor/dto/index';
import { InteresseDto } from '../../interesse/dto/index';

export class AssuntoDto {
  @ApiModelProperty({
    description: 'Identificador do assunto',
  })
  id: number;

  @ApiModelPropertyOptional({
    description: 'Nome do assunto',
  })
  nome: string;

  @ApiModelPropertyOptional({
    description: 'Descrição do assunto',
  })
  descricao: string;

  @ApiModelPropertyOptional({
    description: 'Interesses',
    type: InteresseDto
  })
  interesses: InteresseDto[];

  @ApiModelPropertyOptional({
    description: 'Fontes relacionados ao assunto',
    type: FonteDto
  })
  fontes: FonteDto[];

  @ApiModelPropertyOptional({
    description: 'Descritores relacionado ao assunto',
    type: DescritorDto,
    isArray: true
  })
  descritores: DescritorDto[];
}
