import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { FonteDto, CreateFonteDto } from '../../fonte/dto';
import { GrupoAcessoDto } from '../../grupoAcesso/dto';
import {
  IsString,
  IsDateString,
  IsDefined,
  IsNotEmpty,
  IsArray,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { MidiaDto } from '../../midia/dto/index';
import { DescritorDto } from '../../descritor/dto/index';

export class CreateNoticiaDto {
  @ApiModelProperty({
    description: 'Título da notícia',
  })
  @IsString()
  titulo: string;

  @ApiModelProperty({
    description: 'Contúdo da notícia',
  })
  @IsString()
  conteudo: string;

  @ApiModelProperty({
    description: 'URL da notícia.',
  })
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

  @ApiModelProperty({
    description: 'Fonte da notícia',
    type: CreateFonteDto,
    required: true,
  })
  @IsDefined()
  @IsNotEmpty()
  @ValidateNested()
  fonte: CreateFonteDto;

  @ApiModelProperty({
    description: 'Grupo de acesso',
    type: GrupoAcessoDto,
  })
  @IsDefined()
  @IsNotEmpty()
  @ValidateNested()
  grupoAcesso: GrupoAcessoDto;

  @ApiModelPropertyOptional({
    description: 'Mídias',
    type: MidiaDto,
    isArray: true,
  })
  @IsOptional()
  @IsArray()
  @ValidateNested()
  midias: MidiaDto[];

  @ApiModelPropertyOptional({
    description: 'Descritores',
    type: DescritorDto,
    isArray: true,
  })
  @IsOptional()
  @IsArray()
  @ValidateNested()
  descritores: DescritorDto[];
}
