import { ApiModelProperty } from '@nestjs/swagger';
import { format } from 'path';

export class TweetsDto {
  @ApiModelProperty({
    description: 'Identificador.',
  })
  id: number;

  @ApiModelProperty({
    description: 'Identificador do tweet.',
  })
  twitterId: string;

  @ApiModelProperty({
    description: 'URL do tweet.',
  })
  fonte: string;

  @ApiModelProperty({
    description: 'Usuario do Twitter que fez o tweet.',
  })
  username: string;

  @ApiModelProperty({
    description: 'Texto do tweet.',
  })
  texto: string;

  @ApiModelProperty({
    description: 'Data em que o tweet foi feito.',
    type: 'string',
    format: 'date-time',
  })
  data: Date;

  @ApiModelProperty({
    description: 'Quantidade de retweets feitos.',
  })
  retweets: number;

  @ApiModelProperty({
    description: 'Quantidade que o favorito foi retwetado.',
  })
  favoritos: number;

  @ApiModelProperty({
    description: 'Menções a outros usuarios feitas no tweet.',
  })
  mentions: string;

  @ApiModelProperty({
    description: 'Hashtags contidas no tweet.',
  })
  hashtags: string;

  @ApiModelProperty({
    description: 'Geolocalização de quem publicou tweet.',
  })
  geolocalizacao: string;
}
