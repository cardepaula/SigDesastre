import {
  Injectable,
  Inject,
  Logger,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { TweetInfo } from '../../database/entities/tweetInfo.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { repositoryConfig } from '../../common/config/repositories.config';
import { Repository } from 'typeorm';
import { CrudRequest } from '@nestjsx/crud';
import { NoticiaxService } from '../noticiax/noticiax.service';
import { CreateTweetInfoDto, TweetInfoDto } from './dto';

@Injectable()
export class TweetInfoService extends TypeOrmCrudService<TweetInfo> {
  private logger = new Logger('TweetInfo Create Service', true);

  constructor(
    @Inject(repositoryConfig.tweetInfo)
    private readonly tweetInfoRepository: Repository<TweetInfo>,
    private readonly noticiaService: NoticiaxService,
  ) {
    super(tweetInfoRepository);
  }

  public async create(
    req: CrudRequest,
    tweetInfoDto: CreateTweetInfoDto,
  ): Promise<TweetInfoDto> {
    const findTweetInfo = await this.findOne({
      twitterId: tweetInfoDto.twitterId,
    }).catch(error => {
      this.logger.error('Find tweetInfo: ' + error);
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    });

    if (findTweetInfo) {
      return findTweetInfo;
    }

    if (!tweetInfoDto.noticia.descricao) {
      tweetInfoDto.noticia.descricao = 'Twitter';
    }
    tweetInfoDto.noticia.fonte = {
      nome: 'Twitter',
      link: 'https://twitter.com/',
      tipoFonte: {
        id: 5,
        nome: 'Midias Sociais',
      },
    };

    tweetInfoDto.noticia = await this.noticiaService.create(
      tweetInfoDto.noticia,
    );

    try {
      const tweetCreated = await this.createOne(req, tweetInfoDto);
      return tweetCreated;
    } catch (error) {
      this.logger.error(error);
      throw new HttpException(
        'Erro ao salvar ao TweetInfo.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
