import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { Secao2Component } from './pages/secao2/secao2.component';
import { Secao3Component } from './pages/secao3/secao3.component';
import { Secao4Component } from './pages/secao4/secao4.component';
import { Secao5Component } from './pages/secao5/secao5.component';
import { Secao6Component } from './pages/secao6/secao6.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    Secao2Component,
    Secao3Component,
    Secao4Component,
    Secao5Component,
    Secao6Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
