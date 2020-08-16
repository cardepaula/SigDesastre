import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { CreateFonteDto } from '../../fonte/dto';
import { GrupoAcessoDto } from '../../grupoAcesso/dto';
import {
  IsString,
  IsDefined,
  IsNotEmpty,
  IsArray,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { MidiaDto } from '../../midia/dto';
import { DescritorDto } from '../../descritor/dto';

export class CreateNoticiaDto {
  @ApiModelProperty({
    description: 'Título da notícia',
  })
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  titulo: string;

  @ApiModelProperty({
    description: 'Contúdo da notícia',
  })
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  conteudo: string;

  @ApiModelProperty({
    description: 'URL da notícia.',
  })
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  link: string;

  @ApiModelPropertyOptional({
    description: 'Descrição da notícia',
  })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  descricao: string;

  @ApiModelPropertyOptional({
    description: 'Data de publicação.',
    format: 'date-time',
  })
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  dataPublicacao: string;

  @ApiModelPropertyOptional({
    description: 'Data de criação',
    format: 'date-time',
  })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  dataCriacao: string;

  @ApiModelPropertyOptional({
    description: 'Data de atualização',
    format: 'date-time',
  })
  @IsOptional()
  @IsString()
  dataAtualizacao: string;

  @ApiModelProperty({
    description: 'Fonte da notícia',
    type: () => CreateFonteDto,
    required: true,
  })
  @IsDefined()
  @ValidateNested()
  fonte: CreateFonteDto;

  @ApiModelProperty({
    description: 'Grupo de acesso',
    type: () => GrupoAcessoDto,
  })
  @IsDefined()
  @IsNotEmpty()
  @ValidateNested()
  grupoAcesso: GrupoAcessoDto;

  @ApiModelPropertyOptional({
    description: 'Mídias',
    type: () => MidiaDto,
    isArray: true,
  })
  @IsOptional()
  @IsArray()
  @ValidateNested()
  midias: MidiaDto[];

  @ApiModelPropertyOptional({
    description: 'Descritores',
    type: () => DescritorDto,
    isArray: true,
  })
  @IsOptional()
  @IsArray()
  @ValidateNested()
  descritores: DescritorDto[];
}
