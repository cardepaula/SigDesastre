import { setEnvironment } from './common/config/env.config';
setEnvironment();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { appConfig } from './common/config/app.config';
import * as pacote from '../package.json';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder();
  options.setTitle(pacote.name);
  options.setDescription(pacote.description);
  options.setVersion(pacote.version);

  if (appConfig.env === 'production') {
    options.setSchemes('https', 'http');
  } else {
    options.setSchemes('http', 'https');
  }
  const document = SwaggerModule.createDocument(app, options.build());
  SwaggerModule.setup('', app, document);

  await app.listen(appConfig.port || 5000);
}

bootstrap();
