import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Response } from 'express';
import * as Moment from 'moment';

@Injectable()
export class ConverteDataSaidaInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const res: Response = ctx.getResponse();

    const now = Date.now();
    return next.handle().pipe(
      map(noticia => {
        if (noticia.dataPublicacao)
          noticia.dataPublicacao = this.converteDataSaida(noticia.dataPublicacao);
        if (noticia.dataAtualizacao)
          noticia.dataAtualizacao = this.converteDataSaida(noticia.dataAtualizacao);
        if (noticia.dataCriacao)
          noticia.dataCriacao = this.converteDataSaida(noticia.dataCriacao);

        if (noticia.data) noticia.data = this.converteDataSaida(noticia.data);

        return noticia;
      }),
    );
  }

  private converteDataSaida(data: any) {
    if (data) {
      data = Moment(new Date(data)).format('DD/MM/YYYY');
    }
    return data;
  }
}
