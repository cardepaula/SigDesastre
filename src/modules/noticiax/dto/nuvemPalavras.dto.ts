import { ApiModelProperty } from '@nestjs/swagger';

export class NuvemPalavraDto {
  @ApiModelProperty({
    description: 'Termo encontrado.',
  })
  chave: string;

  @ApiModelProperty({
    description: 'Quantidade do termo encontrado.',
  })
  quantidade: string;
}
