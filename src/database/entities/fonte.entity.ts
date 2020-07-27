import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TipoFonte } from './tipoFonte.entity';
import { Noticia } from './noticia.entity';
import { Assunto } from './assunto.entity';
import { Descritor } from './descritor.entity';

@Entity('fonte', { schema: 'public' })
@Index('fonte_link_key', ['link'], { unique: true })
export class Fonte {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'id',
  })
  id: number;

  @Column('character varying', {
    nullable: true,
    name: 'nome',
  })
  nome: string;

  @Column('character varying', {
    nullable: true,
    unique: true,
    name: 'link',
  })
  link: string;

  @Column('character varying', {
    nullable: true,
    name: 'descricao',
  })
  descricao: string;

  @ManyToOne(() => TipoFonte, tipoFonte => tipoFonte.fontes, {
    nullable: false,
    eager: true,
  })
  tipoFonte: TipoFonte;

  @OneToMany(() => Noticia, noticias => noticias.fonte, { 
    eager: false,
  })
  noticias: Noticia[];

  @ManyToMany(() => Assunto, assuntos => assuntos.fontes, { 
    eager: false, 
  })
  assuntos: Assunto[];

  // @ManyToMany(() => Descritor, descritores => descritores.fontes, {
  //   eager: false,
  // })
  // descritores: Descritor[];
}
