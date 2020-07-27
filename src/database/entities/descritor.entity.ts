import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Assunto } from './assunto.entity';
import { Noticia } from './noticia.entity';
import { Fonte } from './fonte.entity';

@Entity('descritor', { schema: 'public' })
export class Descritor {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'id',
  })
  id: number;

  @Column('character varying', {
    name: 'nome',
  })
  nome: string;

  @ManyToMany(() => Assunto, assuntos => assuntos.descritores, { eager: false })
  assuntos: Assunto[];

  @ManyToMany(() => Noticia, noticias => noticias.descritores, {
    nullable: false,
    eager: false,
  })
  @JoinTable({ name: 'descritor_x_noticia' })
  noticias: Noticia[];

  // @ManyToMany(() => Fonte, fontes => fontes.descritores, {
  //   nullable: false,
  //   eager: false,
  // })
  // @JoinTable({ name: 'descritor_x_fonte' })
  // fontes: Fonte[];
}
