import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { FonteDto } from '../../fonte/dto/index';
import { GrupoAcessoDto } from '../../grupoAcesso/dto/index';
import { Midia } from '../../../database/entities/midia.entity';
import { Descritor } from '../../../database/entities/descritor.entity';
import { IsArray, IsDefined, IsDateString, IsString, IsInt, IsNotEmpty } from 'class-validator';

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

  @ApiModelProperty({
    description: 'Fonte da notícia',
    type: FonteDto,
    required: true
  })
  @IsDefined()
  @IsNotEmpty()
  fonte: FonteDto;

  @ApiModelProperty({
    description: 'Grupo de acesso',
    type: GrupoAcessoDto,
  })
  @IsDefined()
  @IsNotEmpty()
  grupoAcesso: GrupoAcessoDto;

  @ApiModelPropertyOptional({
    description: 'Mídias',
    type: Midia,
    isArray: true,
  })
  @IsArray()
  midias: Midia[];

  @ApiModelPropertyOptional({
    description: 'Descritores',
    type: Descritor,
    isArray: true,
  })
  @IsArray()
  descritores: Descritor[];
}
