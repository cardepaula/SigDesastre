import { Index, Entity, BaseEntity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Noticia } from './noticia.entity';

@Index('tweet_info_twitter_id_key', ['twitterId'], { unique: true })
@Entity('tweet_info')
export class TweetInfo extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'twitter_id', unique: true })
  twitterId: string;

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

  @OneToOne(() => Noticia, noticia => noticia.tweetInfo, {
    eager: true,
  })
  @JoinColumn({name: 'noticiaId'})
  noticia: Noticia;
}
