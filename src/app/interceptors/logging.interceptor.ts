import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { tap, finalize } from 'rxjs';
import { Logger } from '../logger.service';

export const loggingInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  const loggerService = inject(Logger); // inject the logger service

  const startTime = Date.now();
  let status: string;

  return next(req).pipe(
    tap(
      (event) => {
        status = '';
        if (event instanceof HttpResponse) {
          status = 'succeeded';
        }
      },
      (error) => (status = 'failed')
    ),
    finalize(() => {
      const elapsedTime = Date.now() - startTime;
      const message =
        req.method +
        ' ' +
        req.urlWithParams +
        ' ' +
        status +
        ' in ' +
        elapsedTime +
        'ms';
      loggerService.log(`message: ${message}`);
    })
  );
};
