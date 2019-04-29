import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class HttpApiInterceptor implements HttpInterceptor {
  private url = 'https://api.github.com/';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes(this.url)) {
      return next.handle(req);
  } else {
    const fullReq = req.clone({
      url: `${this.url}${req.url}`
    });
      return next.handle(fullReq);
  }

    return next.handle(req);
  }
}
