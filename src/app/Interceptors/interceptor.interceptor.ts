import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingService } from '../Service/loading.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
  constructor(private loading: LoadingService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loading.set(true, request.url);

    return next
      .handle(request)
      .pipe(finalize(() => this.loading.set(false, request.url)));
  }
}
