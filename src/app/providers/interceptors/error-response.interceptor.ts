import {
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToastService } from '../toast/toast';
import { Injectable } from '@angular/core';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        public _toastService: ToastService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap(null, err => {
                if (err instanceof HttpErrorResponse) {
                    this._toastService.message(err['message'] ? err['message'] : err, 2000);
                }
            })
        );
    }
}
