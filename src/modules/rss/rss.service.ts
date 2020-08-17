import {
  Inject,
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
} from '@nestjs/common';
import { repositoryConfig } from '../../common/config/repositories.config';
import { Repository } from 'typeorm';
import { RSS } from '../../database/entities/rss.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { CreateRSSDto } from './dto';
import { CrudRequest } from '@nestjsx/crud';
import { TipoFonteService } from '../tipoFonte/tipoFonte.service';

@Injectable()
export class RSSService extends TypeOrmCrudService<RSS> {
  constructor(
    @Inject(repositoryConfig.rss)
    private readonly rssRepository: Repository<RSS>,
    private readonly tipoFonteService: TipoFonteService,
  ) {
    super(rssRepository);
  }
  private logger = new Logger('RSS Create Service', true);

  async create(req: CrudRequest, rss: CreateRSSDto): Promise<RSS> {
    const findRss = await this.findOne({
      nome: rss.nome,
      url: rss.url,
    }).catch(error => {
      this.logger.error('Find rss: ' + error);
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    });

    if (findRss) {
      return findRss;
    }

    const tipoFonte = await this.tipoFonteService.findOne({
      nome: rss.tipoFonte.nome,
    });

    if (!tipoFonte) {
      throw new Error('Tipo fonte não existe');
    }

    rss.tipoFonte = tipoFonte;

    try {
      const rssCreated = await this.createOne(req, rss);
      return rssCreated;
    } catch (error) {
      this.logger.error(error);
      throw new HttpException(
        'Erro ao salvar ao RSS.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
