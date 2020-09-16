import { ApiModelProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { DescritorDto } from '../../descritor/dto/index';

export class CreateTweetParametrosBuscaDto {
  @ApiModelProperty({
    description: 'Data em que se inicia as buscas, do termo, no Twitter.',
  })
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  dataInicioBusca: string;
  
  @ApiModelProperty({
    description: 'Data da ultima busca parcial(diaria) do termo, feita, no Twitter, com sucesso.',
  })
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  dataUltimaBusca: string;
  
  @ApiModelProperty({
    description: 'Data da ultima busca total(desde a dataInicial), feita, no Twitter, com sucesso.',
  })
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  dataUltimaBuscaTotoal: string;

  @ApiModelProperty({
    description: 'Termo a ser pesquisado no Twitter.',
    type: () => DescritorDto
  })
  @IsDefined()
  @IsNotEmpty()
  @ValidateNested()
  descritor: DescritorDto;
}
