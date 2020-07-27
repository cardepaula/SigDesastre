import {
  Injectable,
  Inject,
  Logger,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { repositoryConfig } from '../../common/config/repositories.config';
import { Repository, DeepPartial } from 'typeorm';
import { Noticia } from '../../database/entities/noticia.entity';
import { CreateNoticiaDto } from './dto/index';
import { CrudRequest } from '@nestjsx/crud';
import { FonteService } from '../fonte/fonte.service';

@Injectable()
export class NoticiaxService extends TypeOrmCrudService<Noticia> {
  constructor(
    @Inject(repositoryConfig.noticia)
    private readonly noticiaRepository: Repository<Noticia>,
    private fonteService: FonteService,
  ) {
    super(noticiaRepository);
  }
  private logger = new Logger('Noticia Create Service', true);

  async create(req: CrudRequest, noticia: CreateNoticiaDto): Promise<Noticia> {
    noticia.fonte = await this.fonteService.create(noticia.fonte);

    const findNoticia = await this.findOne(noticia).catch(error => {
      this.logger.error('Fonte create: ' + error);
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    });

    if (findNoticia) {
      this.logger.log('Noticia encontrada');
      return findNoticia;
    }

    if (!findNoticia) {
      try {
        const noticiaCreated = await this.createOne(req, noticia);
        return noticiaCreated;
      } catch (error) {
        this.logger.error(error);
        throw new HttpException(
          'Erro ao salvar ao Notícia.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }

    try {
      return await this.updateOne(req, findNoticia);
    } catch (error) {
      this.logger.error(error);
      throw new HttpException(
        'Erro ao atualizar ao Notícia.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
