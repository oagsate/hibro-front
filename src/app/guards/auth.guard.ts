import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { StorageService } from '../services/storage.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private storageSvc: StorageService,
    private router: Router,
    private userSvc: UserService
  ) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.checkLogin(route);
  }

  checkLogin(route: ActivatedRouteSnapshot) {
    const isLoginPage = !!route.url.find((e) => e.path === 'login');
    if (this.userSvc.user) {
      if (isLoginPage) {
        return this.router.parseUrl('/plaza');
      } else {
        return true;
      }
    } else {
      if (isLoginPage) {
        return true;
      } else {
        return new Promise<boolean>((resolve) => {
          this.userSvc.getSelf().subscribe((res) => {
            this.userSvc.init(res);
            resolve(true);
          });
        });
      }
    }
  }
}
