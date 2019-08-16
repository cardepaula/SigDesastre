export const dbConfig = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 0),
  user: process.env.DB_USERNAME,
  pass: process.env.DB_PASSWORD,
  schema: process.env.DB_SCHEMA,
  name: process.env.DB_NAME,
};
