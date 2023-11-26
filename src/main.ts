import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routes from './app/routes';

bootstrapApplication(AppComponent,  
  {
    providers: [
      importProvidersFrom(HttpClientModule),
      provideRouter(routes),
    ]
  }
).catch((err) => console.error(err));
