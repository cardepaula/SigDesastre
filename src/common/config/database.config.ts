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
