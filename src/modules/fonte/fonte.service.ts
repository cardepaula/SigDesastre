import {
  Injectable,
  Inject,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Fonte } from '../../database/entities/fonte.entity';
import { repositoryConfig } from '../../common/config/repositories.config';
import { Repository, DeepPartial } from 'typeorm';
import { CrudRequest } from '@nestjsx/crud';
import { TipoFonteService } from '../tipoFonte/tipoFonte.service';

@Injectable()
export class FonteService extends TypeOrmCrudService<Fonte> {
  constructor(
    @Inject(repositoryConfig.fonte)
    private readonly fonteRepository: Repository<Fonte>,
    private tipoFonteService: TipoFonteService,
  ) {
    super(fonteRepository);
  }
  private logger = new Logger('Fonte create service', true);

  async create(fonte: DeepPartial<Fonte>): Promise<Fonte> {
    const findFonte = await this.findOne({
      nome: fonte.nome,
      link: fonte.link,
    }).catch(error => {
      this.logger.error('Find fonte: ' + error);
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    });

    const tipoFonte = await this.tipoFonteService.findOne(fonte.tipoFonte);

    if (!tipoFonte) {
      throw new Error('Tipo fonte não existe');
    }

    fonte.tipoFonte = tipoFonte;

    if (!findFonte) {
      try {
        return await this.fonteRepository.save(fonte);
      } catch (error) {
        this.logger.error(error);
        throw new Error('Error ao criar fonte.');
      }
    }
  }
}
