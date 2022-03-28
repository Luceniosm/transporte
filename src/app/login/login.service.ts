import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseService } from "../utils/BaseService";

@Injectable({
  providedIn: 'root',
})
export class LoginService extends BaseService<any> {
  constructor(private http: HttpClient) { super(); }

  autenticar(data: any): Observable<any> {
    const HttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    return this.http.post('https://accounts.carguero.com.br/connect/token', data, HttpOptions);
  }

  validarLogin(data: any) {
    return this.http.post('https://api-backoffice.carguero.com.br/mobile/pre-cadastros-motoristas/phone-code', data)
  }

}

