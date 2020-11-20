import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { DescritorDto } from '../../descritor/dto/index';

export class TweetParametrosBuscaDto {
  @ApiModelProperty({
    description: 'Identificador',
  })
  id: number;

  @ApiModelProperty({
    description: 'Data em que se inicia as buscas, do termo, no Twitter.',
  })
  dataInicioBusca: string;

  @ApiModelPropertyOptional({
    description: 'Data da ultima busca parcial(diaria) do termo, feita, no Twitter, com sucesso.',
  })
  dataUltimaBusca: string;

  @ApiModelPropertyOptional({
    description: 'Data da ultima busca total(desde a dataInicial), feita, no Twitter, com sucesso.',
  })
  dataUltimaBuscaTotal: string;

  @ApiModelProperty({
    description: 'Termo a ser pesquisado no Twitter.',
  })
  descritor: DescritorDto;
}
