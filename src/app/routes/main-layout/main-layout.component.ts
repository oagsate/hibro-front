import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
  selector:'app-main-layout',
  templateUrl:'./main-layout.component.html',
  styleUrls:['./main-layout.component.less']
})
export class MainLayoutComponent{
  constructor(private userSvc:UserService,private router:Router){}

  logout(){
    this.userSvc.logout().subscribe(res=>{
      if(res.code===0){
        this.router.navigateByUrl('login');
      }
    });
  }
}
