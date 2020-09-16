import { Controller } from '@nestjs/common';
import { Crud, CrudController, CrudRequest, Override, ParsedBody, ParsedRequest } from '@nestjsx/crud';
import { TweetParametrosBusca } from '../../database/entities/tweetParametrosBusca.entity';
import {
  CreateTweetParametrosBuscaDto,
  TweetParametrosBuscaDto,
  UpdateTweetParametrosBuscaDto,
} from './dto/index';
import { TweetParametrosBuscaService } from './tweetParametrosBusca.service';

@Crud({
  model: {
    type: TweetParametrosBuscaDto,
  },
  query: {
    join: {
      descritor: {
        eager: true,
      },
    },
  },
  dto: {
    create: CreateTweetParametrosBuscaDto,
    update: UpdateTweetParametrosBuscaDto,
  },
  routes: {
    exclude: ['replaceOneBase', 'createManyBase'],
  },
})
@Controller('tweet-parametros-busca')
export class TweetParametrosBuscaController
  implements CrudController<TweetParametrosBusca> {
  constructor(public service: TweetParametrosBuscaService) {}

  get base(): CrudController<TweetParametrosBusca> {
    return this;
  }

  @Override()
  public async createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: CreateTweetParametrosBuscaDto,
  ): Promise<TweetParametrosBusca> {
    const response = await this.service.create(dto, req);
    return response;
  }
}
