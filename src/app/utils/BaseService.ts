import { HttpHeaders } from "@angular/common/http";

export abstract class BaseService<T> {
  constructor() { }

  prepararParametros(filtro: any): string {
    let params = '?';

    if (filtro) {
      const paramsList = Object.keys(filtro)
        .map((param) => this.retornarParametrosComArray(param.toString(), filtro[param]))
        .join('&');

      params = params + paramsList;
    }

    return params;
  }

  retornarParametrosComArray(nome: string, campo: any): string {
    let textoArray = '';
    let caracterLigacao = '';
    if (Array.isArray(campo)) {
      campo.forEach(valor => {
        textoArray += caracterLigacao + nome + '=' + valor;
        caracterLigacao = '&';
      });
      return textoArray;
    }
    return nome + '=' + encodeURIComponent(campo);
  }
}


export const HttpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};
