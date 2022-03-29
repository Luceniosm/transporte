import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { AuthToken } from '../auth/auth-model/auth-token.model';
import { AuthUser } from '../auth/auth-model/auth-user.model';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-validar-sms',
  templateUrl: './login-validar-sms.component.html',
  styleUrls: ['./login-validar-sms.component.css']
})
export class LoginValidarSmsComponent implements OnInit {
  userData = JSON.parse(localStorage.getItem('user') || '{}') as AuthUser;
  formSms: FormGroup;
  subscription: Subscription
  smsTimeCounter = 60;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
  ) {
    this.formSms = this.fb.group({
      sms: ['', Validators.required],

    });
    this.subscription = new  Subscription();
    this.userData.token = new AuthToken();
  }

  ngOnInit(): void {
    this.subscription = interval(1000)
           .subscribe(x => { this.getDownCounter(); });
  }

  getDownCounter(): void{
    if(this.smsTimeCounter > 0){
      this.smsTimeCounter =  this.smsTimeCounter - 1;
    }
  }

  continuar(): void {
    const data =
      'username=' + this.userData.cpf +
      '&password=' + this.formSms.get('sms')?.value +
      '&client_id=' + this.userData.client_id +
      '&client_secret=' + this.userData.client_secret +
      '&grant_type=' + this.userData.grant_type;



    this.loginService.autenticar(data).subscribe(el => {
      if (el) {
        this.userData.token = el as AuthToken;
        localStorage.setItem('user', JSON.stringify(this.userData));
        this.router.navigate([`/pedido`]);
      }
    })

  }

  reenviarSms(): void {
    this.loginService.validarLogin(this.userData).subscribe(el => {
      if (el) {
        this.smsTimeCounter = 60;
      }
    })
  }
}
