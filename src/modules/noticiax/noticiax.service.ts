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
import { stopWord } from './stopwords';

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

  async create(noticia: CreateNoticiaDto, req?: CrudRequest): Promise<Noticia> {
    let createFunction: any;
    const findNoticia = await this.findOne({
      titulo: noticia.titulo,
      conteudo: noticia.conteudo,
      link: noticia.link,
    }).catch(error => {
      this.logger.error('Find noticia: ' + error);
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    });

    if (findNoticia) {
      return findNoticia;
    }

    if (req) {
      createFunction =  async (noticia: CreateNoticiaDto) => {
        return await this.createOne(req, noticia);
      };
    } else {
      createFunction = async (noticia: CreateNoticiaDto) => {
        return await this.noticiaRepository.save(noticia);
      };
    }

    noticia.fonte = await this.fonteService.create(noticia.fonte);

    try {
      const noticiaCreated = await createFunction(noticia);
      return noticiaCreated;
    } catch (error) {
      this.logger.error(error);
      throw new HttpException(
        'Erro ao salvar ao Notícia.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getNumevemPalavras() {
    const noticias = await this.noticiaRepository.find();
    const nuvem = [];
    const re = /[^a-zA-Z\u00C0-\u00FF]+/i;
    noticias.forEach(n => {
      let noticia;
      if (n.conteudo) {
        noticia = n.conteudo.replace(/<[^>]+>/g || /{[^>]+}/g, '');
        noticia = noticia.split(re);
        noticia = noticia.filter(c => !stopWord.includes(c));
        this.CriaListaNuvem(nuvem, noticia);
      }
    });
    nuvem.sort((a, b) => b.quantidade - a.quantidade);
    return nuvem;
  }

  private CriaListaNuvem(nuvem: any, noticia: string[]) {
    let possui: boolean;
    noticia.map(palavra => {
      possui = false;
      for (let i = 0; i < nuvem.length; i++) {
        const item = nuvem[i];
        if (item.chave === palavra) {
          item.quantidade++;
          possui = true;
          break;
        }
      }
      if (!possui) {
        nuvem.push({ chave: palavra, quantidade: 1 });
      }
    });
  }
}
