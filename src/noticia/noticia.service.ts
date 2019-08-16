import { Injectable, Inject } from '@nestjs/common';
import { Noticia } from '../database/entities/noticia.entity';
import { Repository } from 'typeorm';
import { repositoryConfig } from 'src/common/config/repositories.config';

@Injectable()
export class NoticiaService {
  constructor(
    @Inject(repositoryConfig.noticia)
    private readonly noticiaRepository: Repository<Noticia>,
  ) {}

  async findAll() {
    return await this.noticiaRepository.find({
      relations: ['fonte', 'grupoAcesso'],
      cache: 60000, // 1 min
    });
  }
}
