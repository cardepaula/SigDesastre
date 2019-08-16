export const appConfig = {
  uri: process.env.APP_URI,
  port: parseInt(process.env.PORT, 0),
  env: process.env.APP_ENV,
  secretKey: process.env.APP_SECRET_KEY,
  tokenExpirationTime: process.env.APP_TOKEN_EXPIRATION_TIME,
  login: process.env.APP_LOGIN,
  password: process.env.APP_PASSWORD,
};
