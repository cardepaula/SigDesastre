import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsDefined, IsString, IsIn } from 'class-validator';
import { TipoFonteDto } from '../../tipoFonte/dto/index';
import { NoticiaDto } from '../../noticiax/dto/index';
import { Assunto } from '../../../database/entities/assunto.entity';
import { Descritor } from '../../../database/entities/descritor.entity';

export class UpdateFonteDto {
  @ApiModelProperty({
    description: 'Identificador da fonte',
    required: true,
  })
  @IsInt()
  @IsDefined()
  id: number;

  @ApiModelPropertyOptional({
    description: 'Nome da fonte',
  })
  @IsString()
  nome: string;

  @ApiModelPropertyOptional({
    description: 'URL da fonte',
  })
  @IsString()
  link: string;

  @ApiModelPropertyOptional({
    description: 'Descrição da fonte',
  })
  @IsString()
  descricao: string;

  @ApiModelProperty({
    description: 'Tipo da fonte',
    type: TipoFonteDto,
  })
  tipoFonte: TipoFonteDto;

  @ApiModelPropertyOptional({
    description: 'Assutos relacionados a fonte',
    isArray: true,
    type: Assunto,
  })
  assuntos: Assunto[];

  @ApiModelPropertyOptional({
    description: 'Descritores relacionados a fonte',
    isArray: true,
    type: Descritor,
  })
  descritores: Descritor[];
}
