import { createConnection, Connection } from 'typeorm';
import { dbConfig } from '../common/config/database.config';
import { Noticia } from './entities/noticia.entity';
import { repositoryConfig } from '../common/config/repositories.config';

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
        synchronize: false, // TODO fazer essa config atraves de ENV
        dropSchema: false,
        cache: true,
      }),
  },

  {
    provide: repositoryConfig.noticia,
    useFactory: (connection: Connection) => connection.getRepository(Noticia),
    inject: [repositoryConfig.database],
  },
];
