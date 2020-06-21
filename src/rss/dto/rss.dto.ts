import { ApiModelProperty } from '@nestjs/swagger';

export class RSSDto {
  @ApiModelProperty()
  readonly nome?: string;
  @ApiModelProperty()
  readonly url?: string;
  @ApiModelProperty()
  readonly tipoFonteId?: number;
  @ApiModelProperty()
  readonly id?: number;
}
