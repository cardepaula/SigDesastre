import { Inject, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { repositoryRSSConfig } from '../common/config/repositories.config';
import { Repository } from 'typeorm';
import { RSS } from '../database/entities/rss.entity';

@Injectable()
export class RSSService {
  constructor(
    @Inject(repositoryRSSConfig.rss)
    private readonly RSSRepository: Repository<RSS>,
  ) {}

  async getRssById(id: number) {
    let rss = await this.RSSRepository.findByIds([id]);
    return rss;
  }
  async getRssAll(): Promise<RSS[]> {
    let rss: Promise<RSS[]>;
    try {
      rss = this.RSSRepository.find();
    } catch (error) {
      throw new HttpException('Erro ao listar RSS', HttpStatus.FORBIDDEN);
    }

    return rss;
  }
  async getRssByName(nome: string) {
    let rss;
    try {
      rss = await this.RSSRepository.findOne({ nome: nome });
    } catch (error) {
      throw new HttpException('Erro ao buscar RSS', HttpStatus.FORBIDDEN);
    }
    return rss;
  }
  async createRss(body: RSS): Promise<RSS> {
    let rss = await this.RSSRepository.findOne({ nome: body.nome });
    if (rss == undefined) {
      rss = new RSS();
      rss.nome = body.nome;
      rss.url = body.url;
      try {
        let newRSS = this.RSSRepository.save(rss);
        console.log(newRSS);
        return newRSS;
      } catch (error) {
        throw new HttpException('Erro ao criar RSS', HttpStatus.FORBIDDEN);
      }
    } else {
      throw new HttpException(
        'Erro ao criar, RSS já cadastrado',
        HttpStatus.FORBIDDEN,
      );
    }
  }
  async updateRss(body: RSS) {
    let rss = await this.RSSRepository.findOne({ nome: body.nome });
    if (rss != undefined) {
      rss.nome = body.nome;
      rss.url = body.url;
      try {
        return await this.RSSRepository.create(rss);
      } catch (error) {
        throw new HttpException('Erro no update', HttpStatus.FORBIDDEN);
      }
    }
    throw new HttpException('Objeto não encontrado', HttpStatus.FORBIDDEN);
  }
  async deleteRss(id: number) {
    try {
      await this.RSSRepository.delete({ id: id });
    } catch (error) {
      throw new HttpException('Objeto não encontrado', HttpStatus.FORBIDDEN);
    }
  }
}
