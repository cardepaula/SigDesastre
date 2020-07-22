import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Assunto } from './assunto.entity';
import { Usuario } from './usuario.entity';

@Entity('interesse', { schema: 'public' })
export class Interesse {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'id',
  })
  id: number;

  @Column('character varying', {
    nullable: true,
    name: 'descricao',
  })
  descricao: string | null;

  @ManyToOne(() => Assunto, assunto => assunto.interesses, {
    nullable: false,
  })
  assunto: Assunto;

  @ManyToOne(() => Usuario, usuario => usuario.interesses, {
    nullable: false,
  })
  usuario: Usuario;
}
