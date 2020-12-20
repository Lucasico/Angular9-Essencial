import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
//carregando o AppModule que vai ser o arquivo principal da aplicação
//reponsavel por inicial a aplicacao
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
