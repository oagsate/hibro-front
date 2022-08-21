import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NzMessageService } from "ng-zorro-antd/message";
import { UserService } from "src/app/services/user.service";

@Component({
    selector:'app-login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.less']
})
export class LoginComponent{
    username = '';
    password = '';

    constructor(
        private userSvc:UserService,
        private msgSvc:NzMessageService,
        private router:Router
    ){}

    onLogin(){
        this.userSvc.login({
            name:this.username,
            password:this.password
        }).subscribe((res=>{
            if(res.code === 0){
              this.router.navigateByUrl('plaza');
            }
        }))
    }

    onRegister(){
        this.router.navigateByUrl('register');
    }
}
