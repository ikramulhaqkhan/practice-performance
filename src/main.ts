import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';



if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(registrations => {
    for (const registration of registrations) {
      registration.unregister();
    }
  });
  // Unregister service workers
}

if (environment.production) {
  enableProdMode();

}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
