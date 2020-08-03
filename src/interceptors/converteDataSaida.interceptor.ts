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
    console.log('Before...', res.json);

    const now = Date.now();
    console.log(now);
    return next.handle().pipe(
      map(value => {
        if (value.data) {
          for (const data of value.data) {
            if (data.dataPublicacao)
              data.dataPublicacao = this.converteDataSaida(data.dataPublicacao);
            if (data.dataAtualizacao)
              data.dataAtualizacao = this.converteDataSaida(
                data.dataAtualizacao,
              );
            if (data.dataCriacao)
              data.dataCriacao = this.converteDataSaida(data.dataCriacao);

            if (data.data) data.data = this.converteDataSaida(data.data);
          }
        }
        return value;
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
