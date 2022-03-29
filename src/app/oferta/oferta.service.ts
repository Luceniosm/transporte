import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ActionResult } from "../utils/action-result.model";
import { BaseService } from "../utils/BaseService";

@Injectable({
  providedIn: 'root',
})
export class OfertaService extends BaseService<any> {
  constructor(private http: HttpClient) { super(); }

  obterOferta(): Observable<ActionResult> {
    return this.http.get<ActionResult>('https://api-plataforma.carguero.com.br/mobile/ofertas?pageIndex=1&pageSize=12&api-version=2.0');
  }

}

