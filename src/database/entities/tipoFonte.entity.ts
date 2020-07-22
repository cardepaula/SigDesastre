import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Fonte } from './fonte.entity';
import { RSS } from './rss.entity';

@Entity('tipo_fonte', { schema: 'public' })
@Index('tipo_fonte_nome_key', ['nome'], { unique: true })
export class TipoFonte {
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

  @OneToMany(() => Fonte, fonte => fonte.tipoFonte, {
    eager: false,
  })
  fontes: Fonte[];

  // @OneToMany(() => RSS, rss => rss.tipoFonte)
  // rss: RSS[];
}
