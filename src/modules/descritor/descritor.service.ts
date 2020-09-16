import { Injectable, Inject, HttpStatus, HttpException } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Descritor } from '../../database/entities/descritor.entity';
import { repositoryConfig } from '../../common/config/repositories.config';
import { Repository } from 'typeorm';
import { CrudRequest } from '@nestjsx/crud';
import { CreateDescritorDto } from './dto/index';

@Injectable()
export class DescritorService extends TypeOrmCrudService<Descritor> {
  constructor(
    @Inject(repositoryConfig.descritor)
    private readonly descritorRepository: Repository<Descritor>,
  ) {
    super(descritorRepository);
  }

  public async create(
    descritor: CreateDescritorDto,
    req?: CrudRequest,
  ): Promise<Descritor> {
    let createFunction: any;

    const findDescritor = await this.findOne({
      nome: descritor.nome,
    }).catch(error => {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    });

    if (findDescritor) {
      return findDescritor;
    }

    if (req) {
      createFunction = async (descritor: CreateDescritorDto) => {
        return await this.createOne(req, descritor);
      };
    } else {
      createFunction = async (descritor: CreateDescritorDto) => {
        return await this.descritorRepository.save(descritor);
      };
    }

    try {
      const descritorCreated = await createFunction(descritor);
      return descritorCreated;
    } catch (error) {
      throw new HttpException(
        'Erro ao salvar o Descritor.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
