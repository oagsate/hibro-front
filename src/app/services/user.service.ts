import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class UserService{
    constructor(
        private http:HttpClient
    ){}

    login(param:any){
        return this.http.post('/api/users/login',param);
    }
}