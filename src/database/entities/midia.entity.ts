import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Noticia } from './noticia.entity';
import { TipoMidia } from './tipoMidia.entity';

@Entity('midia', { schema: 'public' })
export class Midia {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'id',
  })
  id: number;

  @Column('character varying', {
    nullable: true,
    name: 'nome',
  })
  nome: string | null;

  @Column('character varying', {
    nullable: false,
    name: 'link',
  })
  link: string;

  @ManyToOne(() => Noticia, noticia => noticia.midias, {
    nullable: false,
  })
  @JoinColumn({ name: 'fk_noticia' })
  noticia: Noticia;

  @ManyToOne(() => TipoMidia, tipoMidia => tipoMidia.midias, {
    nullable: false,
  })
  @JoinColumn({ name: 'fk_tipo_midia' })
  tipoMidia: TipoMidia;
}
