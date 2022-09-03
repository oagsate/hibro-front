import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private storageSvc:StorageService,
    private router:Router,
    private userSvc:UserService
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ) {
    return this.checkLogin();
  }

  checkLogin(){
    if(this.userSvc.user){
      return true;
    }else{
      return new Promise<boolean>((resolve)=>{
        this.userSvc.getSelf().subscribe(res=>{
          this.userSvc.init(res.data);
          resolve(true);
        });
      });
    }
  }
}
