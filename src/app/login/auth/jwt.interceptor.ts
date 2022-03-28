import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthUser } from './auth-model/auth-user.model';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      debugger
        // add authorization header with jwt token if available
        const currentUser = JSON.parse(localStorage.getItem('user') || '{}') as AuthUser;
        if (currentUser?.token?.access_token !== '') {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token.access_token}`
                }
            });
        }

        return next.handle(request);
    }
}
