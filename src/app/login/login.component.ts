import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUser } from './auth/auth-model/auth-user.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  hide = true;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
  ) {
    this.formLogin = this.fb.group({
      cpf: ['', Validators.required],
      celular: ['', Validators.required],
      lembrar: [false]
    });
  }

  ngOnInit(): void {
  }


  isFieldInvalid(field: string) {
    return (
      (!this.formLogin.get(field)?.valid && this.formLogin.get(field)?.touched) ||
      (this.formLogin.get(field)?.untouched)
    );
  }

  entrar(): void {
    const data = new AuthUser();
    data.cpf = this.formLogin.get('cpf')?.value;
    data.telefone = '55' + this.formLogin.get('celular')?.value;

    localStorage.setItem('user', JSON.stringify(data));
    this.loginService.validarLogin(data).subscribe(el => {
      if (el) {
        this.router.navigate([`/loginValidar`]);
      }
    })
  }
}
