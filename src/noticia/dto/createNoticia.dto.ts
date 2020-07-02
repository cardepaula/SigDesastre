import { ApiModelProperty } from '@nestjs/swagger';
import { IsString, IsDateString, IsArray, IsDefined } from 'class-validator';
import { Fonte } from '../../database/entities/fonte.entity';
import { Midia } from '../../database/entities/midia.entity';
import { Descritor } from '../../database/entities/descritor.entity';

export class GrupoAcessoDto {
    @ApiModelProperty()
    nome?: string;
  }

export class TipoFonteDto {
    @ApiModelProperty()
    nome?: string;
  }

export class FonteDto {
    @ApiModelProperty()
    link: string;
    @ApiModelProperty()
    nome?: string;
    @ApiModelProperty()
    descricao?: string;
    @ApiModelProperty()
    tipoFonte?: TipoFonteDto;
  }

export class CreateNoticiaDto {
  @ApiModelProperty({
    description: 'URL da fonte',
    required: false,
  })
  @IsString()
  link: string;

  @ApiModelProperty({
    description: 'Descrição da fonte',
    required: false,
  })
  @IsString()
  descricao: string;

  @ApiModelProperty({
    description: 'Data de publicação',
    required: false,
    format: 'data-time'
  })
  @IsDateString()
  dataPublicacao: string;

  @ApiModelProperty({
    description: 'Titulo da notícia',
    required: false,
  })
  @IsString()
  titulo: string;

  @ApiModelProperty({
    description: 'Conteudo da notícia',
    required: false,
  })
  @IsString()
  conteudo: string;

  @ApiModelProperty({
    description: 'Data da criação da notícia.',
    required: false,
  })
  @IsDateString()
  dataCriacao: string;

  @ApiModelProperty({
    description: 'Data de atualização da notícia.',
    required: false,
  })
  @IsDateString()
  dataAtualizacao: string;

  @ApiModelProperty({
    description: 'Fonte da notícia',
    required: false,
    type: FonteDto
  })
  fonte: FonteDto;

  @ApiModelProperty({
    description: 'Midias',
    required: false,
    type: Midia
  })
  @IsArray()
  midias: Midia[];

  @ApiModelProperty({
    description: 'Grupo de acesso a noticia',
    required: true,
    type: GrupoAcessoDto
  })
  @IsDefined()
  grupoAcesso: GrupoAcessoDto;

  @ApiModelProperty({
    description: 'Descritores.',
    required: false,
  })
  descritores: Descritor[];
}
