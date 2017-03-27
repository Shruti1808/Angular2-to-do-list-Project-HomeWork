import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);    //bootstrap refers to "bootstrapping", or launching, an application.Not related to front-end framework.
