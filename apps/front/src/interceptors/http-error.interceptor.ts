import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse,
  HttpEvent,
} from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

type NotificationDescription = {
  type: string;
  message: string;
};

const is4xxError = (error: HttpErrorResponse): boolean => {
  return error.status >= 400 && error.status < 500;
};

const getErrorData = (
  error: HttpErrorResponse
): NotificationDescription => {
  const notificationData = {
    type: error.statusText,
    message: `Status code: ${error.status} `,
  };

  if (is4xxError(error) && error?.error?.message?.[0]) {
    notificationData.message = error.error.message[0];
  }
  return notificationData;
};

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private toastrService: ToastrService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      map((res) => res),
      catchError((error: HttpErrorResponse) => {
        const errData = getErrorData(error);
        this.toastrService.error(errData.message, errData.type, {
          timeOut: 5000,
          positionClass: 'toast-bottom-left',
        });
        return throwError(() => error.message);
      })
    );
  }
}
