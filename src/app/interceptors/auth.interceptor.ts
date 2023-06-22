import { HttpInterceptorFn } from '@angular/common/http';
import { TokenKey } from '../app.config';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = sessionStorage.getItem(TokenKey) || '';

  // Clone the request and replace the original headers with
  // cloned headers, updated with the authorization.
  const authReq = req.clone({
    headers: req.headers.set('Authorization', authToken )
  });

  // send cloned request with header to the next handler.
  return next(authReq);
};
