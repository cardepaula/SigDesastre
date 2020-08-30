import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Interesse } from './interesse.entity';
import { Fonte } from './fonte.entity';
import { Descritor } from './descritor.entity';

@Entity('assunto', { schema: 'public' })
@Index('assunto_nome_key', ['nome'], { unique: true })
export class Assunto {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'id',
  })
  id: number;

  @Column('character varying', {
    nullable: false,
    unique: true,
    name: 'nome',
  })
  nome: string;

  @Column('character varying', {
    nullable: true,
    name: 'descricao',
  })
  descricao: string;

  @OneToMany(() => Interesse, interesses => interesses.assunto, {
    eager: false,
  })
  interesses: Interesse[];

  @ManyToMany(() => Fonte, fontes => fontes.assuntos, {
    nullable: false,
    eager: false,
  })
  @JoinTable({ name: 'assunto_x_fonte' })
  fontes: Fonte[];

  @ManyToMany(() => Descritor, descritores => descritores.assuntos, {
    nullable: false,
    eager: false,
  })
  @JoinTable({ name: 'assunto_x_descritor' })
  descritores: Descritor[];
}
