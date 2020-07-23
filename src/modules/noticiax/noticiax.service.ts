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
import { FonteDto } from '../fonte/dto/index';
//import { MidiaService } from '../midia/midia.service';
//import { DescritorService } from '../descritor/descritor.service';

@Injectable()
export class NoticiaxService extends TypeOrmCrudService<Noticia> {
  constructor(
    @Inject(repositoryConfig.noticia)
    private readonly noticiaRepository: Repository<Noticia>,
    private fonteService: FonteService,
    // private midiaService: MidiaService,
    // private descritorService: DescritorService,
  ) {
    super(noticiaRepository);
  }

  async create(req: CrudRequest, noticia: CreateNoticiaDto): Promise<Noticia> {
    const logger = new Logger('Noticia Create Service', true);

    noticia.fonte = await this.fonteService.create(noticia.fonte);

    const findNoticia = await this.findOne(noticia).catch( error => {
        logger.error('Fonte create: ' + error)
        throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
      });

    if (findNoticia) {
      logger.log('Noticia encontrada');
      return findNoticia;
    }

    // if (noticia.midias) {
    //   noticia.midias = await this.midiaService.createMulti(noticia.midia);
    // }
    //
    // if (noticia.descritores) {
    //   noticia.descritores = await this.descritorService.createMult(noticia.descritores);
    // }


    if (!findNoticia) {
      try {
        const noticiaCreated = await this.createOne(req, noticia);
        return noticiaCreated;
      } catch (error) {
        logger.error(error);
        throw new HttpException(
          'Erro ao salvar ao Notícia.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }

    try {
      return await this.updateOne(req, findNoticia);
    } catch (error) {
      logger.error(error);
      throw new HttpException(
        'Erro ao atualizar ao Notícia.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
