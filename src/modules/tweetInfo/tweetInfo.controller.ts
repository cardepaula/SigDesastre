import { Controller } from '@nestjs/common';
import {
  CrudController,
  Crud,
  CrudRequest,
  GetManyDefaultResponse,
  Override,
  ParsedRequest,
  ParsedBody,
} from '@nestjsx/crud';
import { TweetInfo } from '../../database/entities/tweetInfo.entity';
import { TweetInfoService } from './tweetInfo.service';
import { ApiUseTags } from '@nestjs/swagger';
import { TweetInfoDto, CreateTweetInfoDto, UpdateTweetInfoDto } from './dto';

@Crud({
  model: {
    type: TweetInfoDto,
  },
  query: {
    join: {
      noticia: {
        eager: true,
      },
      'noticia.fonte': {
        alias: 'noticiaFonte',
        eager: true,
      },
      'noticia.fonte.tipoFonte': {
        alias: 'fonteTipoFonte',
        eager: true,
      },
      'noticia.grupoAcesso': {
        alias: 'noticiaGrupoAcesso',
        eager: false,
      },
    },
  },
  dto: {
    create: CreateTweetInfoDto,
    update: UpdateTweetInfoDto,
  },
  routes: {
    exclude: ['createManyBase', 'replaceOneBase'],
  },
})
@ApiUseTags('Tweets')
@Controller('tweets')
export class TweetInfoController implements CrudController<TweetInfo> {
  constructor(public service: TweetInfoService) {}

  private get base(): CrudController<TweetInfo> {
    return this;
  }

  @Override()
  public async createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: CreateTweetInfoDto,
  ) {
    return await this.service.create(req, dto);
  }
}
