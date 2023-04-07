import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../http/auth.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private auth: AuthService) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const token = this.auth.getToken();
        if (token) {
            const requestWithToken = request.clone({
                headers: new HttpHeaders({
                    Authorization: `Bearer ` + `${token}`
                })
            });
            return next.handle(requestWithToken);
        }
        return next.handle(request);
    }
}
