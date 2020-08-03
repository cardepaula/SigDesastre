import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import * as Moment from 'moment';

@Injectable()
export class ConverteDataEntradaInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const req: Request = ctx.getRequest();
    const method: string = req.method;
    if (method === 'POST') {
      const body: any = req.body;

      if (body.dataPublicacao)
        body.dataPublicacao = this.converteDataEntrada(body.dataPublicacao);

      if (body.dataAtualizacao)
        body.dataAtualizacao = this.converteDataEntrada(body.dataAtualizacao);

      if (body.dataCriacao)
        body.dataCriacao = this.converteDataEntrada(body.dataCriacao);

      if (body.data) body.data = this.converteDataEntrada(body.data);
    }

    return next.handle();
  }

  private converteDataEntrada(data: string) {
    if (Moment(data, 'DD/MM/YYYY').isValid()) {
      data = Moment(data, 'DD/MM/YYYY')
        .utc()
        .format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
    } else if (Moment(data, 'DD-MM-YYYY').isValid()) {
      data = Moment(data, 'DD-MM-YYYY')
        .utc()
        .format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
    }

    return data;
  }
}
