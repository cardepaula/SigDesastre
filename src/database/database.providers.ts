import {
  dbConfig,
  //dbTweetConfig,
  // dbRSSConfig,
} from '../common/config/database.config';
import { Noticia } from './entities/noticia.entity';
import {
  repositoryConfig,
  //repositoryTweetConfig,
  //repositoryRSSConfig,
} from '../common/config/repositories.config';
import { Fonte } from './entities/fonte.entity';
import { TipoFonte } from './entities/tipoFonte.entity';
import { GrupoAcesso } from './entities/grupoAcesso.entity';
import { Connection, createConnection } from 'typeorm';
import { Tweets } from './entities/tweets.entity';
import { RSS } from './entities/rss.entity';
import { Descritor } from './entities/descritor.entity';
import { Assunto } from './entities/assunto.entity';
import { Interesse } from './entities/interesse.entity';
import { Midia } from './entities/midia.entity';
import { TipoMidia } from './entities/tipoMidia.entity';
import { Usuario } from './entities/usuario.entity';
import { Logger } from '@nestjs/common';

export const databaseProviders = [
  {
    provide: repositoryConfig.database,
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: dbConfig.host,
        port: dbConfig.port,
        username: dbConfig.user,
        password: dbConfig.pass,
        database: dbConfig.name,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: dbConfig.synchronize,
        cache: dbConfig.cache,
        migrationsTableName: 'migrations',
        migrationsRun: dbConfig.migrationRun,
        migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
        cli: {
          entitiesDir: './database/entities',
          migrationsDir: './database/migrations',
        },
        logging: dbConfig.logging,
        logger: 'file',
        ssl: dbConfig.ssl,
      }),
  },
  {
    provide: repositoryConfig.noticia,
    useFactory: (connection: Connection) => connection.getRepository(Noticia),
    inject: [repositoryConfig.database],
  },
  {
    provide: repositoryConfig.fonte,
    useFactory: (connection: Connection) => connection.getRepository(Fonte),
    inject: [repositoryConfig.database],
  },
  {
    provide: repositoryConfig.tipoFonte,
    useFactory: (connection: Connection) => connection.getRepository(TipoFonte),
    inject: [repositoryConfig.database],
  },
  {
    provide: repositoryConfig.grupoAcesso,
    useFactory: (connection: Connection) =>
      connection.getRepository(GrupoAcesso),
    inject: [repositoryConfig.database],
  },
  {
    provide: repositoryConfig.assunto,
    useFactory: (connection: Connection) => connection.getRepository(Assunto),
    inject: [repositoryConfig.database],
  },
  {
    provide: repositoryConfig.descritor,
    useFactory: (connection: Connection) => connection.getRepository(Descritor),
    inject: [repositoryConfig.database],
  },
  {
    provide: repositoryConfig.interesse,
    useFactory: (connection: Connection) => connection.getRepository(Interesse),
    inject: [repositoryConfig.database],
  },
  {
    provide: repositoryConfig.midia,
    useFactory: (connection: Connection) => connection.getRepository(Midia),
    inject: [repositoryConfig.database],
  },
  {
    provide: repositoryConfig.tipoMidia,
    useFactory: (connection: Connection) => connection.getRepository(TipoMidia),
    inject: [repositoryConfig.database],
  },
  {
    provide: repositoryConfig.usuario,
    useFactory: (connection: Connection) => connection.getRepository(Usuario),
    inject: [repositoryConfig.database],
  },
  {
    provide: repositoryConfig.tweets,
    useFactory: (connection: Connection) => connection.getRepository(Tweets),
    inject: [repositoryConfig.database],
  },
  {
    provide: repositoryConfig.rss,
    useFactory: (connection: Connection) => connection.getRepository(RSS),
    inject: [repositoryConfig.database],
  },
];

// export const databaseTweetProviders = [
//   {
//     provide: repositoryTweetConfig.database,
//     useFactory: async () =>
//       await createConnection({
//         name: 'twitter',
//         type: 'postgres',
//         host: dbTweetConfig.host,
//         port: dbTweetConfig.port,
//         username: dbTweetConfig.user,
//         password: dbTweetConfig.pass,
//         database: dbTweetConfig.name,
//         entities: [__dirname + '/../**/tweets.entity{.ts,.js}'],
//         // synchronize: dbTweetConfig.synchronize,
//         // dropSchema: dbTweetConfig.dropSchema,
//         // cache: dbTweetConfig.cache,
//       }),
//   },
//   {
//     provide: repositoryTweetConfig.tweets,
//     useFactory: (connection: Connection) => connection.getRepository(Tweets),
//     inject: [repositoryTweetConfig.database],
//   },
// ];

// export const databaseRSSProviders = [
//   {
//     provide: repositoryRSSConfig.database,
//     useFactory: async () =>
//       await createConnection({
//         name: 'rss',
//         type: 'postgres',
//         host: dbRSSConfig.host,
//         port: dbRSSConfig.port,
//         username: dbRSSConfig.user,
//         password: dbRSSConfig.pass,
//         database: dbRSSConfig.name,
//         entities: [__dirname + '/../**/rss.entity{.ts,.js}'],
//         // synchronize: dbRSSConfig.synchronize,
//         // dropSchema: dbRSSConfig.dropSchema,
//         // cache: dbRSSConfig.cache
//       }),
//   },
//   {
//     provide: repositoryRSSConfig.rss,
//     useFactory: (connection: Connection) => connection.getRepository(RSS),
//     inject: [repositoryRSSConfig.database],
//   },
// ];
