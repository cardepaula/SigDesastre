import { CreateNoticiaDto } from '../../noticiax/dto';
import {
  IsString,
  MaxLength,
  IsOptional,
  IsNumber,
  ValidateNested,
} from 'class-validator';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class CreateTweetInfoDto {

  @ApiModelProperty({
    description: 'Identificador do tweet no Twitter.',
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  twitterId?: string;

  @ApiModelPropertyOptional({
    description: 'Quantidade de retweets feitos.',
  })
  @IsOptional()
  @IsNumber()
  retweets?: number;

  @ApiModelPropertyOptional({
    description: 'Quantidade que o tweet foi favoritado.',
  })
  @IsOptional()
  @IsNumber()
  favoritos?: number;

  @ApiModelPropertyOptional({
    description: 'Menções a outros usuarios feitas no tweet.',
  })
  @IsOptional()
  @IsString()
  @MaxLength(280)
  mentions?: string;

  @ApiModelPropertyOptional({
    description: 'Hashtags contidas no tweet.',
  })
  @IsOptional()
  @IsString()
  @MaxLength(280)
  hashtags?: string;

  @ApiModelPropertyOptional({
    description: 'Geolocalização de quem publicou tweet.',
  })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  geolocalizacao?: string;

  @ApiModelProperty({
    description: `Objeto noticia relacionado ao tweet.
    - noticia.link -> url do tweet
    - noticia.dataPublicacao -> data do tweet;
    - noticia.titulo -> username da conta que fez o tweet;
    - noticia.conteudo -> o texto do tweet;`,
    type: () => CreateNoticiaDto,
  })
  noticia: CreateNoticiaDto;
}
