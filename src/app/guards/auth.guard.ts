import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private storageSvc:StorageService,
    private router:Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ) {
    return this.checkLogin();
  }

  checkLogin(){
    const user = this.storageSvc.getItem('user');
    if(user){
      return true;
    }else{
      return this.router.parseUrl('/login');
    }
  }
}
