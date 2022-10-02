import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpStatusCode,
  HttpErrorResponse,
} from '@angular/common/http';

import { filter, map, Observable, tap } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
import { UiService } from './services/ui.service';
import { StorageService } from './services/storage.service';
import { UserService } from './services/user.service';
import { nextLoop } from './util';
import { APICode } from './models/index.model';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(
    private msgSvc: NzMessageService,
    private router: Router,
    private uiSvc: UiService,
    private storageSvc: StorageService,
    private userSvc: UserService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    nextLoop().then(() => {
      this.uiSvc.showLoading();
    });
    req = req.clone({ withCredentials: true });
    return next.handle(req).pipe(map((event) => this.process(event)));
  }

  process(event: HttpEvent<any>) {
    if (event instanceof HttpResponse) {
      this.uiSvc.hideLoading();
      if (event.status === HttpStatusCode.Ok) {
        if (event.body?.code !== APICode.Success) {
          this.handleErrCode(event.body?.code);
          throw new HttpErrorResponse({
            error: event.body?.code,
            status: 0,
            statusText: 'Frontend Intercepted',
          });
        } else {
          return event.clone({ body: event.body.data });
        }
      }
    }
    return event;
  }

  handleErrCode(code: APICode) {
    if (code === APICode.NotLogin) {
      if (this.userSvc.user) {
        this.msgSvc.warning('尚未登录或登录已过期');
      }
      this.userSvc.clear();
      this.router.navigateByUrl('login');
    } else if (code === APICode.UserExist) {
      this.msgSvc.warning('用户名已存在');
    }
  }
}
