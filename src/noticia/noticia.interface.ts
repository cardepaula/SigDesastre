import { ApiModelProperty } from '@nestjs/swagger';

export class NoticiaInterface {
  @ApiModelProperty({ required: false })
  id?: string;
  @ApiModelProperty({ required: false })
  titulo?: string;
  @ApiModelProperty({ required: false })
  conteudo?: string;
  @ApiModelProperty({ required: false })
  fonte?: string;
  @ApiModelProperty({ required: false })
  grupoAcesso?: string;
  @ApiModelProperty({ required: false })
  qtdNoticias?: number;
  @ApiModelProperty({ required: false })
  pagina?: number;
}
