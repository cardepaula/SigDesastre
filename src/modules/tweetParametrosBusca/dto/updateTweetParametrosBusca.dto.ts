import { ApiModelPropertyOptional } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { UpdateDescritorDto } from '../../descritor/dto/index';

export class UpdateTweetParametrosBuscaDto {
  @ApiModelPropertyOptional({
    description: 'Data em que se inicia as buscas, do termo, no Twitter.',
  })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  dataInicioBusca: string;

  @ApiModelPropertyOptional({
    description:
      'Data da ultima busca parcial(diaria) do termo, feita, no Twitter, com sucesso.',
  })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  dataUltimaBusca: string;

  @ApiModelPropertyOptional({
    description:
      'Data da ultima busca total(desde a dataInicial), feita, no Twitter, com sucesso.',
  })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  dataUltimaBuscaTotoal: string;

  @ApiModelPropertyOptional({
    description: 'Termo a ser pesquisado no Twitter.',
  })
  @IsOptional()
  @IsNotEmpty()
  @ValidateNested()
  descritor: UpdateDescritorDto;
}
