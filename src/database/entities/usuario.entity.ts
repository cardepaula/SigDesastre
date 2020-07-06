import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GrupoAcesso } from './grupoAcesso.entity';
import { Interesse } from './interesse.entity';

@Entity('usuario', { schema: 'public' })
@Index('usuario_email_key', ['email'], { unique: true })
export class Usuario {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'id',
  })
  id: number;

  @Column('character varying', {
    nullable: false,
    name: 'nome',
  })
  nome: string;

  @Column('character varying', {
    unique: false,
    name: 'email',
  })
  email: string;

  @Column('character varying', {
    nullable: false,
    name: 'senha',
  })
  senha: string;

  @ManyToOne(() => GrupoAcesso, grupoAcesso => grupoAcesso.usuarios, {
    nullable: false,
  })
  @JoinColumn({ name: 'fk_grupo_acesso' })
  grupoAcesso: GrupoAcesso;

  @OneToMany(() => Interesse, interesse => interesse.usuario)
  interesses: Interesse[];
}
