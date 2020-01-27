import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { ApiUseTags, ApiImplicitQuery, ApiResponse } from '@nestjs/swagger';
import { TweetsService } from './tweets.service';
import { TweetsDto } from './dto/tweets.dto';

@ApiUseTags('Tweets')
@Controller('tweets')
export class TweetsController {
  constructor(private readonly tweetsService: TweetsService) {}

  @ApiImplicitQuery({
    name: 'qtdTweets',
    description:
      'Quantidade de tweets que deseja buscar por request, por padrão o valor é 10',
    required: false,
    type: Number,
    isArray: false,
    collectionFormat: 'multi',
  })
  @ApiImplicitQuery({
    name: 'pagina',
    description: 'pagina que deseja visualizar, por padrão o valor é 1',
    required: false,
    type: Number,
    isArray: false,
    collectionFormat: 'multi',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Tweets Filtradas',
    type: TweetsDto
  })
  @Get()
  public search(@Query() query) {
    return this.tweetsService.searchTweets(query);
  }
}
