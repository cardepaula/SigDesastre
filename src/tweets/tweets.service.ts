import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Tweets } from '../database/entities/tweets.entity';
import { repositoryTweetConfig } from '../common/config/repositories.config';
import { TweetsParams } from './tweetsParams';

@Injectable()
export class TweetsService {
  constructor(
    @Inject(repositoryTweetConfig.tweets)
    private readonly noticiaRepository: Repository<Tweets>,
  ) {}

  async searchTweets(params: TweetsParams) {
    if (params.qtdTweets == undefined && params.pagina == undefined) {
      params.qtdTweets = 10;
      params.pagina = 0;
    } else {
      if (params.qtdTweets == undefined) {
        params.qtdTweets = 10;
      } else {
        if (params.pagina == undefined) {
          params.pagina = 0;
        }
      }
    }

    const [tweets, qtdTweets] = await this.noticiaRepository.findAndCount({
      skip: params.pagina * params.qtdTweets,
      take: params.qtdTweets,
    });

    return {
      totalNoticias: qtdTweets,
      paginaAtual: Math.ceil(params.pagina),
      totalPaginas: Math.ceil(qtdTweets / params.qtdTweets),
      quantidadeExibida: Math.ceil(params.qtdTweets),
      tweets,
    };
  }
}
