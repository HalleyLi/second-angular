import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { of, tap } from 'rxjs';

export const cacheInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  let cache = new Map<string, any>();
  if (request.method !== 'GET') {
    return next(request);
  }

  const cacheResponse = cache.get(request.url);
  if (cacheResponse) {
    return of(cacheResponse);
  }

  return next(request).pipe(
    tap((event) => {
      if (event instanceof HttpResponse) {
        cache.set(request.url, event);
      }
    })
  );
};
