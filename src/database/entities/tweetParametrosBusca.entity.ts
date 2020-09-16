import {
  Index,
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Descritor } from './descritor.entity';

@Entity('tweet_parametros_busca')
export class TweetParametrosBusca extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('timestamp without time zone', {
    nullable: false,
    name: 'data_inicio_busca',
  })
  dataInicioBusca: string;

  @Column('timestamp without time zone', {
    nullable: false,
    name: 'data_ultima_busca',
  })
  dataUltimaBusca: string;

  @Column('timestamp without time zone', {
    nullable: false,
    name: 'data_ultima_busca_total',
  })
  dataUltimaBuscaTotoal: string;

  @OneToOne(() => Descritor, descritor => descritor.tweetParametrosBusca, {
    eager: true,
  })
  @JoinColumn({ name: 'descritorId' })
  descritor: Descritor;
}
