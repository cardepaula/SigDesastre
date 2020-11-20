import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CrudRequest } from '@nestjsx/crud';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { repositoryConfig } from '../../common/config/repositories.config';
import { TweetParametrosBusca } from '../../database/entities/tweetParametrosBusca.entity';
import { DescritorService } from '../descritor/descritor.service';
import { CreateTweetParametrosBuscaDto } from './dto/index';

@Injectable()
export class TweetParametrosBuscaService extends TypeOrmCrudService<
  TweetParametrosBusca
> {
  constructor(
    @Inject(repositoryConfig.tweetParametrosBusca)
    private readonly tweetParametrosBuscaRepository: Repository<
      TweetParametrosBusca
    >,
    private descritorService: DescritorService,
  ) {
    super(tweetParametrosBuscaRepository);
  }

  public async create(
    tweetParametrosBusca: CreateTweetParametrosBuscaDto,
    req?: CrudRequest,
  ): Promise<TweetParametrosBusca> {
    let createFunction: any;

    tweetParametrosBusca.descritor = await this.descritorService.create(
      tweetParametrosBusca.descritor,
    );

    const findTweetParam = await this.findOne({
      descritor: tweetParametrosBusca.descritor,
    }).catch(error => {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    });

    if (findTweetParam) {
      return findTweetParam;
    }

    if (req) {
      createFunction = async (
        createTweetParametrosBusca: CreateTweetParametrosBuscaDto,
      ) => {
        return await this.createOne(req, createTweetParametrosBusca);
      };
    } else {
      createFunction = async (
        createTweetParametrosBusca: CreateTweetParametrosBuscaDto,
      ) => {
        return await this.tweetParametrosBuscaRepository.save(
          createTweetParametrosBusca,
        );
      };
    }

    tweetParametrosBusca.descritor = await this.descritorService.create(
      tweetParametrosBusca.descritor,
    );

    try {
      const tweetParametrosBuscaCreated = await createFunction(
        tweetParametrosBusca,
      );
      return tweetParametrosBuscaCreated;
    } catch (error) {
      throw new HttpException(
        'Erro ao salvar ao TweetParametroBusca.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
