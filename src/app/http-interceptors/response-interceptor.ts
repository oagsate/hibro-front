import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpStatusCode
} from '@angular/common/http';

import { filter, map, Observable, tap } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor(private msgSvc:NzMessageService,private router: Router){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(event => {
        if(event instanceof HttpResponse && event.status === HttpStatusCode.Ok){
          if(event.body.code ===1){
            this.msgSvc.warning("尚未登录或登录已过期");
            this.router.navigateByUrl('login')
          }else if(event.body.code !== 0 && event.body.message){
            this.msgSvc.error(event.body.message);
          }
        }
      }),
      map((event) => this.process(event))
    );
  }

  process(event:HttpEvent<any>){
    if(event instanceof HttpResponse){
    }
    return event;
  }
}
