import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { provideClientHydration, BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';

const bootstrap = () =>  bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule),
        provideClientHydration(),
        provideHttpClient()
    ]
});

export default bootstrap;
