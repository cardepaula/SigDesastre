import { NoticiaDto } from '../../noticiax/dto/index';
import { ApiModelPropertyOptional, ApiModelProperty } from '@nestjs/swagger';

export class TweetInfoDto {
  @ApiModelProperty({
    description: 'Identificador do tweetInfo no banco.',
  })
  id: number;

  @ApiModelPropertyOptional({
    description: 'Identificador do tweet no Twitter.',
  })
  twitterId: string;

  @ApiModelPropertyOptional({
    description: 'Quantidade de retweets feitos.',
  })
  retweets?: number;

  @ApiModelPropertyOptional({
    description: 'Quantidade que o tweet foi favoritado.',
  })
  favoritos?: number;

  @ApiModelPropertyOptional({
    description: 'Menções a outros usuarios feitas no tweet.',
  })
  mentions?: string;

  @ApiModelPropertyOptional({
    description: 'Hashtags contidas no tweet.',
  })
  hashtags?: string;

  @ApiModelPropertyOptional({
    description: 'Geolocalização de quem publicou tweet.',
  })
  geolocalizacao?: string;

  @ApiModelProperty({
    description: `Objeto noticia relacionado ao tweet.
    - noticia.link -> url do tweet
    - noticia.descricao -> 'Twitter';
    - noticia.dataPublicacao -> data do tweet;
    - noticia.titulo -> username da conta que fez o tweet;
    - noticia.conteudo -> o texto do tweet;`,
    type: () => NoticiaDto,
  })
  noticia: NoticiaDto;
}
