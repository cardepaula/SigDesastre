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
      map(value => {
        if (value.data && Array.isArray(value.data)) {
          value.data.map(v => {
            v = this.converteDataSaida(v);
          });
        } else {
          value = this.converteDataSaida(value);
        }

        return value;
      }),
    );
  }

  private converteDataSaida(objeto: any) {
    if (objeto.dataPublicacao) {
      objeto.dataPublicacao = this.converteData(objeto.dataPublicacao);
    }
    if (objeto.dataAtualizacao) {
      objeto.dataAtualizacao = this.converteData(objeto.dataAtualizacao);
    }
    if (objeto.dataCriacao) {
      objeto.dataCriacao = this.converteData(objeto.dataCriacao);
    }

    if (objeto.data) { objeto.data = this.converteData(objeto.data); }
    return objeto;
  }

  private converteData(data: any) {
    if (data) {
      data = Moment(new Date(data)).format('DD/MM/YYYY');
    }
    return data;
  }
}
