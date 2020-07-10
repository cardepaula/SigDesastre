import {ConnectionOptions} from 'typeorm';
var path = require('path');

const srcDir = path.relative(__dirname, 'src')

const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'senha',
  database: process.env.DB_NAME || 'sigdesastre',
  entities: ['./**/*.entity{.ts,.js}'],
  synchronize: Boolean(process.env.DB_SYNC) || false,
  migrationsTableName: 'migrations',
  migrationsRun: false,
  migrations: ['src/database/migrations/**/*{.ts,.js}'],
  cli: {
    entitiesDir: 'src/database/entities',
    migrationsDir: 'src/database/migrations',
  },
  logging: Boolean(process.env.DB_LOGGING) || false,
  logger: 'simple-console',
  ssl: Boolean(process.env.DB_SSL) || true
};

export = config;
