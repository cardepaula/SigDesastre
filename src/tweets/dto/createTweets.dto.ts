import { ApiModelProperty } from "@nestjs/swagger";
import { IsString, IsDateString, IsNumber, MaxLength } from 'class-validator';

export class CreateTweetsDto {

  @ApiModelProperty({
    description: 'Identificador do tweet.',
    type: 'string',
  })
  @IsString()
  @MaxLength(100)
  twitterId: string;

  @ApiModelProperty({
    description: 'URL do tweet.',
    type: 'string',
  })
  @IsString()
  @MaxLength(100)
  fonte: string;

  @ApiModelProperty({
    description: 'Usuario do Twitter que fez o tweet.',
    type: 'string',
  })
  @IsString()
  @MaxLength(50)
  username: string;

  @ApiModelProperty({
    description: 'Texto do tweet.',
    type: 'string',
  })
  @IsString()
  @MaxLength(500)
  texto: string;

  @ApiModelProperty({
    description: 'Data em que o tweet foi feito.',
    type: 'string',
    format: 'date-time',
  })
  @IsDateString()
  data: Date;

  @ApiModelProperty({
    description: 'Quantidade de retweets feitos.',
    type: 'number',
    default: 0,
    required: false
  })
  @IsNumber()
  retweets: number;

  @ApiModelProperty({
    description: 'Quantidade que o favorito foi retwetado.',
    type: 'number',
    default: 0,
    required: false
  })
  @IsNumber()
  favoritos: number;

  @ApiModelProperty({
    description: 'Menções a outros usuarios feitas no tweet.',
    type: 'number',
    required: false
  })
  @IsString()
  @MaxLength(280)
  mentions: string;

  @ApiModelProperty({
    description: 'Hashtags contidas no tweet.',
    type: 'string',
    required: false
  })
  @IsString()
  @MaxLength(280)
  hashtags: string;

  @ApiModelProperty({
    description: 'Geolocalização de quem publicou tweet.',
    type: 'string',
    required: false
  })
  @IsString()
  @MaxLength(500)
  geolocalizacao: string;

}
