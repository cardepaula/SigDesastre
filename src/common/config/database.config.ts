export const dbConfig = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 0),
  user: process.env.DB_USERNAME,
  pass: process.env.DB_PASSWORD,
  schema: process.env.DB_SCHEMA,
  name: process.env.DB_NAME,
};
export const dbRSSConfig = {
  type: process.env.DB_TYPE_RSS,
  host: process.env.DB_HOST_RSS,
  port: parseInt(process.env.DB_PORT_RSS, 0),
  user: process.env.DB_USERNAME_RSS,
  pass: process.env.DB_PASSWORD_RSS,
  schema: process.env.DB_SCHEMA_RSS,
  name: process.env.DB_NAME_RSS,
};

export const dbTweetConfig = {
  type: process.env.DB_TYPE_TW,
  host: process.env.DB_HOST_TW,
  port: parseInt(process.env.DB_PORT_TW, 0),
  user: process.env.DB_USERNAME_TW,
  pass: process.env.DB_PASSWORD_TW,
  schema: process.env.DB_SCHEMA_TW,
  name: process.env.DB_NAME_TW,
};
