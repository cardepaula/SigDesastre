import { ApiModelProperty } from '@nestjs/swagger';

export class TipoNoticias {
  @ApiModelProperty()
  readonly fonte: string;
  @ApiModelProperty()
  readonly quantidade: number;
  @ApiModelProperty()
  readonly link: string;
}

export class LastWeeksNews {
  @ApiModelProperty()
  readonly totalNoticias: number;
  @ApiModelProperty()
  readonly noticias: string;
  @ApiModelProperty()
  readonly noticiasPorTipo?: TipoNoticias[];
}
