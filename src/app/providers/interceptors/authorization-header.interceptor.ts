import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest
} from '@angular/common/http';

@Injectable()
export class AuthorizationHeaderInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // Clone the request to add the new header.
        const authReq = req.clone({ setHeaders: { Authorization: '' } });

        // Pass on the cloned request instead of the original request.
        return next.handle(authReq);

    }
}
