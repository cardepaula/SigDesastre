import { Logger } from '@nestjs/common';

function normalizeBoolean(value: any) {
  typeof value === 'string' ? (value = value.toLowerCase()) : value;
  return value === 'true';
};

export const dbConfig = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT, 0) || 5432,
  user: process.env.DB_USERNAME || 'postgres',
  pass: process.env.DB_PASSWORD || 'senha',
  schema: process.env.DB_SCHEMA || 'public',
  name: process.env.DB_NAME || 'sigdesastre',
  dropSchema: normalizeBoolean(process.env.DB_DROP),
  synchronize: normalizeBoolean(process.env.DB_SYNC),
  cache: normalizeBoolean(process.env.DB_CACHE),
  migrationRun: normalizeBoolean(process.env.DB_MIGRATION_RUN),
  logging: normalizeBoolean(process.env.DB_LOGGING),
  ssl: normalizeBoolean(process.env.DB_SLL),
};

// export const dbRSSConfig = {
//   type: process.env.DB_TYPE_RSS,
//   host: process.env.DB_HOST_RSS,
//   port: parseInt(process.env.DB_PORT_RSS, 0),
//   user: process.env.DB_USERNAME_RSS,
//   pass: process.env.DB_PASSWORD_RSS,
//   schema: process.env.DB_SCHEMA_RSS,
//   name: process.env.DB_NAME_RSS,
//   // synchronize: Boolean(process.env.DB_SYNC) || false,
//   // dropSchema: Boolean(process.env.DB_DROP_SCHEME) || false,
//   // cache: Boolean(process.env.DB_CACHE) || false,
// };

// export const dbTweetConfig = {
//   type: process.env.DB_TYPE_TW,
//   host: process.env.DB_HOST_TW,
//   port: parseInt(process.env.DB_PORT_TW, 0),
//   user: process.env.DB_USERNAME_TW,
//   pass: process.env.DB_PASSWORD_TW,
//   schema: process.env.DB_SCHEMA_TW,
//   name: process.env.DB_NAME_TW,
//   // synchronize: Boolean(process.env.DB_SYNC) || false,
//   // dropSchema: Boolean(process.env.DB_DROP_SCHEME) || false,
//   // cache: Boolean(process.env.DB_CACHE) || false,
// };
