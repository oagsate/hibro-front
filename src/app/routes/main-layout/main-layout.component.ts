import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { StorageService } from "src/app/services/storage.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector:'app-main-layout',
  templateUrl:'./main-layout.component.html',
  styleUrls:['./main-layout.component.less']
})
export class MainLayoutComponent{
  constructor(
    private userSvc:UserService,
    private router:Router,
    private storageSvc:StorageService
  ){}

  logout(){
    this.userSvc.logout().subscribe(res=>{
      if(res.code===0){
        this.storageSvc.removeItem('user');
        this.router.navigateByUrl('login');
      }
    });
  }
}
