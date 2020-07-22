import { ApiModelPropertyOptional, ApiModelProperty } from '@nestjs/swagger';
import { IsInt, IsDefined, IsString, IsArray, IsOptional } from 'class-validator';
import { UpdateFonteDto } from '../../fonte/dto/index';
import { UpdateDescritorDto } from '../../descritor/dto/index';

export class UpdateAssuntoDto {
  @ApiModelProperty({
    description: 'Identificador do assunto',
  })
  @IsInt()
  @IsDefined()
  id: number;

  @ApiModelPropertyOptional({
    description: 'Nome do assunto',
  })
  @IsOptional()
  @IsString()
  nome: string;

  @ApiModelPropertyOptional({
    description: 'Descrição do assunto',
  })
  @IsOptional()
  @IsString()
  descricao: string;
}
