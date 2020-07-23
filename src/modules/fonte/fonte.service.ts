import { Injectable, Inject, HttpException, HttpStatus, Logger } from '@nestjs/common';
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

  async create(dto: DeepPartial<Fonte>): Promise<Fonte> {
    const logger = new Logger('Fonte create service', true);
    let fonte: Fonte;

    const tipoFonte = await this.tipoFonteService.findOne(dto.tipoFonte);

    if (!tipoFonte) {
      throw new Error("Tipo fonte não existe");
    }

    dto.tipoFonte = tipoFonte;

    try {
      fonte = await this.findOne(dto);
    } catch (error) {
      logger.error('Fonte find: ' + error);
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR)
    }

    if(!fonte){
      try {
        fonte = await this.fonteRepository.save(dto);
      } catch (error) {
        logger.error(error)
        throw new Error("Error ao criar fonte.");
      }
    }

    return fonte;
  }

}
