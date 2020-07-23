import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { NoticiaModule } from './noticia/noticia.module';
import { TweetsModule } from './modules/tweets/tweets.module';
import { RSSModule } from './modules/rss/rss.module';
import { AuthModule } from './auth/auth.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { FonteModule } from './modules/fonte/fonte.module';
import { GrupoAcessoModule } from './modules/grupoAcesso/grupoAcesso.module';
import { TipoFonteModule } from './modules/tipoFonte/tipoFonte.module';
import { NoticiaxModule } from './modules/noticiax/noticiax.module';
import { DescritorModule } from './modules/descritor/descritor.module';
import { AssuntoModule } from './modules/assunto/assunto.module';
import { InteresseModule } from './modules/interesse/interesse.module';
import { MidiaModule } from './modules/midia/midia.module';
import { TipoMidiaModule } from './modules/tipoMidia/tipoMidia.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
@Module({
  imports: [
    DatabaseModule,
    NoticiaModule,
    TweetsModule,
    RSSModule,
    AuthModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
    }),
    FonteModule,
    GrupoAcessoModule,
    TipoFonteModule,
    NoticiaxModule,
    DescritorModule,
    AssuntoModule,
    InteresseModule,
    MidiaModule,
    TipoMidiaModule,
    UsuarioModule,
  ],
  controllers: [],
  providers: [],
  exports: [
    DatabaseModule,
    NoticiaModule,
    TweetsModule,
    RSSModule,
    AuthModule,
    FonteModule,
    GrupoAcessoModule,
    TipoFonteModule,
    NoticiaxModule,
    DescritorModule,
    AssuntoModule,
    InteresseModule,
    MidiaModule,
    TipoMidiaModule,
    UsuarioModule,
  ]
})
export class AppModule {}
