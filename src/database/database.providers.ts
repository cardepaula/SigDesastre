import { dbConfig } from '../common/config/database.config';
import { Noticia } from './entities/noticia.entity';
import { repositoryConfig } from '../common/config/repositories.config';
import { Fonte } from './entities/fonte.entity';
import { TipoFonte } from './entities/tipoFonte.entity';
import { GrupoAcesso } from './entities/grupoAcesso.entity';

export const databaseProviders = [
  {
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
    useFactory: (connection: Connection) => connection.getRepository(GrupoAcesso),
    inject: [repositoryConfig.database],
  },
];
