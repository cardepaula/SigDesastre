import {ConnectionOptions} from 'typeorm';
import { dbConfig } from './src/common/config/database.config';

var path = require('path');

const srcDir = path.relative(__dirname, 'src')

const config: ConnectionOptions = {
  type: 'postgres',
  host: dbConfig.host || 'localhost',
  port: dbConfig.port || 5432,
  username: dbConfig.user || 'postgres',
  password: dbConfig.pass || 'senha',
  database: dbConfig.name || 'sigdesastre',
  entities: ['./src/**/*.entity{.ts,.js}'],
  synchronize: dbConfig.synchronize || false,
  migrationsTableName: 'migrations',
  migrationsRun: false,
  migrations: ['src/database/migrations/**/*{.ts,.js}'],
  cli: {
    entitiesDir: 'src/database/entities',
    migrationsDir: 'src/database/migrations',
  },
  logging: dbConfig.logging || false,
  logger: 'simple-console',
  ssl: dbConfig.ssl || false
};

console.log(config);

export = config;
