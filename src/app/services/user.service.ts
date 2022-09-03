import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RO, User } from "../models/index.model";

@Injectable({
    providedIn:'root'
})
export class UserService{
    user?:User;

    constructor(
        private http:HttpClient
    ){}

    login(param:any){
        return this.http.post<RO>('/api/login',param);
    }

    register(param:any){
      return this.http.post<RO>('/api/register',param);
    }

    logout(){
      return this.http.post<RO>('/api/logout',{});
    }

    getAll(){
      return this.http.get<RO>('/api/users');
    }

    getSelf(){
      return this.http.get<RO>('/api/self');
    }

    clear(){
      this.user = undefined;
    }

    init(user:User){
      this.user = user;
    }
}
