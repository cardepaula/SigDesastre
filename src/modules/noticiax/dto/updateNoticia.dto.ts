import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { FonteDto } from '../../fonte/dto/index';
import { GrupoAcessoDto } from '../../grupoAcesso/dto/index';
import { Midia } from '../../../database/entities/midia.entity';
import { Descritor } from '../../../database/entities/descritor.entity';
import {
  IsArray,
  IsDefined,
  IsDateString,
  IsString,
  IsInt,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import { DescritorDto } from '../../descritor/dto/index';
import { MidiaDto } from '../../midia/dto/index';

export class UpdateNoticiaDto {
  @ApiModelProperty({
    description: 'Identificados da notícia.',
  })
  @IsDefined()
  @IsInt()
  id: number;

  @ApiModelPropertyOptional({
    description: 'Título da notícia',
  })
  @IsOptional()
  @IsString()
  titulo: string;

  @ApiModelPropertyOptional({
    description: 'Contúdo da notícia',
  })
  @IsOptional()
  @IsString()
  conteudo: string;

  @ApiModelPropertyOptional({
    description: 'URL da notícia.',
  })
  @IsOptional()
  @IsString()
  link: string;

  @ApiModelPropertyOptional({
    description: 'Descrição da notícia',
  })
  @IsOptional()
  @IsString()
  descricao: string;

  @ApiModelPropertyOptional({
    description: 'Data de publicação.',
    format: 'date-time',
  })
  @IsOptional()
  @IsDateString()
  dataPublicacao: string;

  @ApiModelPropertyOptional({
    description: 'Data de criação',
    format: 'date-time',
  })
  @IsOptional()
  @IsDateString()
  dataCriacao: string;

  @ApiModelPropertyOptional({
    description: 'Data de atualização',
    format: 'date-time',
  })
  @IsOptional()
  @IsDateString()
  dataAtualizacao: string;

  @ApiModelPropertyOptional({
    description: 'Fonte da notícia',
    type: () => FonteDto,
  })
  @IsOptional()
  @IsNotEmpty()
  fonte: FonteDto;

  @ApiModelPropertyOptional({
    description: 'Grupo de acesso',
    type: () => GrupoAcessoDto,
  })
  @IsOptional()
  @IsNotEmpty()
  grupoAcesso: GrupoAcessoDto;

  @ApiModelPropertyOptional({
    description: 'Mídias',
    type: () => MidiaDto,
    isArray: true,
  })
  @IsOptional()
  @IsArray()
  midias: MidiaDto[];

  @ApiModelPropertyOptional({
    description: 'Descritores',
    type: () => DescritorDto,
    isArray: true,
  })
  @IsOptional()
  @IsArray()
  descritores: DescritorDto[];
}
