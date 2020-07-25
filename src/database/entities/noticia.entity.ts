import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  OneToOne,
} from 'typeorm';
import { Fonte } from './fonte.entity';
import { GrupoAcesso } from './grupoAcesso.entity';
import { Midia } from './midia.entity';
import { Descritor } from './descritor.entity';
import { TweetInfo } from './tweetInfo.entity';

@Entity('noticia', { schema: 'public' })
@Index('noticia_link_key', ['link'], { unique: true })
export class Noticia {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'id',
  })
  id: number;

  @Column('character varying', {
    nullable: true,
    name: 'titulo',
  })
  titulo: string;

  @Column('character varying', {
    nullable: true,
    name: 'conteudo',
  })
  conteudo: string;

  @Column('character varying', {
    unique: true,
    name: 'link',
  })
  link: string;

  @Column('text', {
    nullable: true,
    name: 'descricao',
  })
  descricao: string;

  @Column('date', {
    nullable: true,
    name: 'data_publicacao',
  })
  dataPublicacao: string;

  @Column('date', {
    nullable: true,
    name: 'data_criacao',
  })
  dataCriacao: string;

  @Column('date', {
    nullable: true,
    name: 'data_atualizacao',
  })
  dataAtualizacao: string;

  @ManyToOne(() => Fonte, fonte => fonte.noticias, {
    nullable: false,
    cascade: ['insert','update'],
  })
  fonte: Fonte;

  @ManyToOne(() => GrupoAcesso, grupoAcesso => grupoAcesso.noticias, {
    nullable: false,
    eager: true,
  })
  grupoAcesso: GrupoAcesso;

  @OneToMany(() => Midia, midia => midia.noticia, { eager: true })
  midias: Midia[];

  @ManyToMany(() => Descritor, descritor => descritor.noticias, { eager: true })
  descritores: Descritor[];

  @OneToOne(() => TweetInfo, tweetInfo => tweetInfo.noticia, { 
    eager: false,
  })
  tweetInfo: TweetInfo;
}
