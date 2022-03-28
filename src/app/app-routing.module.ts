import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginValidarSmsComponent } from './login/login-validar-sms/login-validar-sms.component';
import { LoginComponent } from './login/login.component';
import { OfertaComponent } from './oferta/oferta.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'loginValidar', component: LoginValidarSmsComponent },
  { path: 'pedido', component: OfertaComponent },
]
@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', useHash: true, onSameUrlNavigation: 'reload', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
