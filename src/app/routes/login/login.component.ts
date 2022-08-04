import { Component } from "@angular/core";
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
        private userSvc:UserService
    ){}

    onLogin(){
        this.userSvc.login({
            name:this.username,
            password:this.password
        }).subscribe((res=>{}))
    }
}