import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { CursoPageComponent } from './modules/home/pages/curso-page/curso-page.component';
import { ContactoPageComponent } from './modules/home/pages/contacto-page/contacto-page.component';
import { AdminPageComponent } from './modules/home/pages/admin-page/admin-page.component';
import { AutenticacionPageComponent } from './modules/home/pages/autenticacion-page/autenticacion-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CursoPageComponent,
    ContactoPageComponent,
    AdminPageComponent,
    AutenticacionPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
