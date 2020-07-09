import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { FonteDto } from '../../fonte/dto/index';
import { GrupoAcessoDto } from '../../grupoAcesso/dto/index';
import { Midia } from '../../../database/entities/midia.entity';
import { Descritor } from '../../../database/entities/descritor.entity';
import { IsArray, IsDefined, IsDateString, IsString, IsInt, IsNotEmpty } from 'class-validator';
import { DescritorDto } from '../../descritor/dto/index';
import { MidiaDto } from '../../midia/dto/index';

export class UpdateNoticiaDto {
  @ApiModelProperty({
    description: 'Identificados da notícia.',
    required: true
  })
  @IsInt()
  @IsDefined()
  id: number;

  @ApiModelPropertyOptional({
    description: 'Título da notícia',
  })
  @IsString()
  titulo: string;

  @ApiModelPropertyOptional({
    description: 'Contúdo da notícia',
  })
  @IsString()
  conteudo: string;

  @ApiModelPropertyOptional({
    description: 'URL da notícia.',
  })
  @IsString()
  link: string;

  @ApiModelPropertyOptional({
    description: 'Descrição da notícia',
  })
  @IsString()
  descricao: string;

  @ApiModelPropertyOptional({
    description: 'Data de publicação.',
    format: 'date-time',
  })
  @IsDateString()
  dataPublicacao: string;

  @ApiModelPropertyOptional({
    description: 'Data de criação',
    format: 'date-time',
  })
  @IsDateString()
  dataCriacao: string;

  @ApiModelPropertyOptional({
    description: 'Data de atualização',
    format: 'date-time',
  })
  @IsDateString()
  dataAtualizacao: string;

  @ApiModelPropertyOptional({
    description: 'Fonte da notícia',
    type: FonteDto,
  })
  @IsDefined()
  @IsNotEmpty()
  fonte: FonteDto;

  @ApiModelPropertyOptional({
    description: 'Grupo de acesso',
    type: GrupoAcessoDto,
  })
  @IsDefined()
  @IsNotEmpty()
  grupoAcesso: GrupoAcessoDto;

  @ApiModelPropertyOptional({
    description: 'Mídias',
    type: MidiaDto,
    isArray: true,
  })
  @IsArray()
  midias: MidiaDto[];

  @ApiModelPropertyOptional({
    description: 'Descritores',
    type: DescritorDto,
    isArray: true,
  })
  @IsArray()
  descritores: DescritorDto[];
}
