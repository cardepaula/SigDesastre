import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { Midia } from '../../../database/entities/midia.entity';
import { Descritor } from '../../../database/entities/descritor.entity';
import { GrupoAcessoDto } from '../../grupoAcesso/dto';
import { FonteDto } from '../../fonte/dto';

export class NoticiaDto {
  @ApiModelProperty({
    description: 'Identificados da notícia.',
    required: true,
  })
  id: number;

  @ApiModelPropertyOptional({
    description: 'Título da notícia',
  })
  titulo: string;

  @ApiModelPropertyOptional({
    description: 'Contúdo da notícia',
  })
  conteudo: string;

  @ApiModelPropertyOptional({
    description: 'URL da notícia.',
  })
  link: string;

  @ApiModelPropertyOptional({
    description: 'Descrição da notícia',
  })
  descricao: string;

  @ApiModelPropertyOptional({
    description: 'Data de publicação.',
    format: 'date-time',
  })
  dataPublicacao: string;

  @ApiModelPropertyOptional({
    description: 'Data de criação',
    format: 'date-time',
  })
  dataCriacao: string;

  @ApiModelPropertyOptional({
    description: 'Data de atualização',
    format: 'date-time',
  })
  dataAtualizacao: string;

  @ApiModelProperty({
    description: 'Fonte da notícia',
    type: FonteDto,
    required: true,
  })
  fonte: FonteDto;

  @ApiModelProperty({
    description: 'Grupo de acesso',
    type: GrupoAcessoDto,
  })
  grupoAcesso: GrupoAcessoDto;

  @ApiModelPropertyOptional({
    description: 'Mídias',
    type: Midia,
    isArray: true,
  })
  midias: Midia[];

  @ApiModelPropertyOptional({
    description: 'Descritores',
    type: Descritor,
    isArray: true,
  })
  descritores: Descritor[];
}
