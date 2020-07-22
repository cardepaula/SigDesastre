import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsDateString,
  IsNumber,
  MaxLength,
  IsDefined,
  IsInt,
  IsOptional,
} from 'class-validator';

export class UpdateTweetsDto {
  @ApiModelProperty({
    description: 'Identificador do RSS',
  })
  @IsDefined()
  @IsInt()
  id: number;

  @ApiModelPropertyOptional({
    description: 'Identificador do tweet.',
    type: 'string',
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  twitterId: string;

  @ApiModelPropertyOptional({
    description: 'URL do tweet.',
    type: 'string',
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  fonte: string;

  @ApiModelPropertyOptional({
    description: 'Usuario do Twitter que fez o tweet.',
    type: 'string',
  })
  @IsOptional()
  @IsString()
  @MaxLength(50)
  username: string;

  @ApiModelPropertyOptional({
    description: 'Texto do tweet.',
    type: 'string',
  })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  texto: string;

  @ApiModelPropertyOptional({
    description: 'Data em que o tweet foi feito.',
    type: 'string',
    format: 'date-time',
  })
  @IsOptional()
  @IsDateString()
  data: Date;

  @ApiModelPropertyOptional({
    description: 'Quantidade de retweets feitos.',
    type: 'number',
    default: 0,
  })
  @IsOptional()
  @IsNumber()
  retweets: number;

  @ApiModelPropertyOptional({
    description: 'Quantidade que o favorito foi retwetado.',
    type: 'number',
    default: 0,
  })
  @IsOptional()
  @IsNumber()
  favoritos: number;

  @ApiModelPropertyOptional({
    description: 'Menções a outros usuarios feitas no tweet.',
    type: 'number',
  })
  @IsOptional()
  @IsString()
  @MaxLength(280)
  mentions: string;

  @ApiModelPropertyOptional({
    description: 'Hashtags contidas no tweet.',
    type: 'string',
  })
  @IsOptional()
  @IsString()
  @MaxLength(280)
  hashtags: string;

  @ApiModelPropertyOptional({
    description: 'Geolocalização de quem publicou tweet.',
    type: 'string',
  })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  geolocalizacao: string;
}
