import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { Logger } from './logger.service';

export const appConfig: ApplicationConfig = {
  providers: [Logger, provideRouter(routes), provideHttpClient()],
};
