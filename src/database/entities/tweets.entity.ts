import {
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  BaseEntity,
} from 'typeorm';

@Index('tweets_pkey', ['id'], { unique: true })
@Index('tweets_twitter_id_key', ['twitterId'], { unique: true })
@Entity('tweets', { schema: 'public' })
export class Tweets extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('bigint', { name: 'twitter_id', unique: true })
  twitterId: string;

  @Column('character varying', { name: 'fonte', length: 100 })
  fonte: string;

  @Column('character varying', { name: 'username', length: 50 })
  username: string;

  @Column('character varying', { name: 'texto', length: 500 })
  texto: string;

  @Column('timestamp without time zone', { name: 'data' })
  data: Date;

  @Column('integer', { name: 'retweets' })
  retweets: number;

  @Column('integer', { name: 'favoritos' })
  favoritos: number;

  @Column('character varying', {
    name: 'mentions',
    length: 280,
    nullable: true,
  })
  mentions: string;

  @Column('character varying', {
    name: 'hashtags',
    length: 280,
    nullable: true,
  })
  hashtags: string;

  @Column('character varying', {
    name: 'geolocalizacao',
    nullable: true,
    length: 500,
  })
  geolocalizacao: string;
}
