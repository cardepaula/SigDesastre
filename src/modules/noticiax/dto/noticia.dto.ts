import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { GrupoAcessoDto } from '../../grupoAcesso/dto';
import { FonteDto } from '../../fonte/dto';
import { MidiaDto } from '../../midia/dto/index';
import { DescritorDto } from '../../descritor/dto/index';

export class NoticiaDto {
  @ApiModelProperty({
    description: 'Identificados da notícia.',
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
    type: () => FonteDto,
    required: true,
  })
  fonte: FonteDto;

  @ApiModelProperty({
    description: 'Grupo de acesso',
    type: () => GrupoAcessoDto,
  })
  grupoAcesso: GrupoAcessoDto;

  @ApiModelPropertyOptional({
    description: 'Mídias',
    type: () => MidiaDto,
    isArray: true,
  })
  midias: MidiaDto[];

  @ApiModelPropertyOptional({
    description: 'Descritores',
    type: () => DescritorDto,
    isArray: true,
  })
  descritores: DescritorDto[];
}
