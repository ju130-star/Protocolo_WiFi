import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { Secao2Component } from './pages/secao2/secao2.component';
import { Secao3Component } from './pages/secao3/secao3.component';
import { Secao4Component } from './pages/secao4/secao4.component';
import { Secao5Component } from './pages/secao5/secao5.component';
import { Secao6Component } from './pages/secao6/secao6.component';

const routes: Routes = [
  {path: "", redirectTo: "/inicio", pathMatch: "full"},
  {path: "inicio", component: InicioComponent},
  {path: "secao2", component: Secao2Component},
  {path: "secao3", component: Secao3Component},
  {path: "secao4", component: Secao4Component},
  {path: "secao5", component: Secao5Component},
  {path: "secao6", component: Secao6Component},
  {path: "**", redirectTo: "/inicio"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
