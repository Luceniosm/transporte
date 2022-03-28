import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';



export let numberRequest = 0;
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private spinner: NgxSpinnerService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    numberRequest = numberRequest + 1;
    this.spinner.show();
    return next.handle(request).pipe(
      finalize(() => {
        numberRequest = numberRequest - 1;
        if (numberRequest === 0) {
          this.spinner.hide();
        }
      }),
      catchError(err => {
        console.log(err);
        const error = err.error.message || err.statusText;
        return throwError(error);
      }));
  }
}
