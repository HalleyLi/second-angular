import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { Logger } from './logger.service';
import { loggingInterceptor } from './interceptors/logging.interceptor';
import { authInterceptor } from './interceptors/auth.interceptor';

export const TokenKey = 'Authorization';

export const appConfig: ApplicationConfig = {
  providers: [
    Logger,
    provideRouter(routes),
    //retryInterceptor({ count: 5 }),cacheInterceptor, errorHandlerInterceptor
    provideHttpClient(
      withInterceptors(
        [authInterceptor, loggingInterceptor]
      )
    ),
  ],
};
