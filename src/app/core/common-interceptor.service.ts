import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpParams } from '@angular/common/http';

import { take, exhaustMap } from 'rxjs/operators';
//import { AppModule } from './../../app/app.module';
import { AppComponent } from './../../app/app.component';

@Injectable()
export class CommonInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const modifiedReq = req.clone({
        headers:AppComponent.headers
      });
      return next.handle(modifiedReq);

  }
}
