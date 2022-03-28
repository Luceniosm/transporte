import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JwtInterceptor } from './login/auth/jwt.interceptor';
import { LoginValidarSmsComponent } from './login/login-validar-sms/login-validar-sms.component';
import { LoginComponent } from './login/login.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { OfertaComponent } from './oferta/oferta.component';
import { ErrorInterceptor } from './utils/Error.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuLateralComponent,
    LoginValidarSmsComponent,
    OfertaComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
