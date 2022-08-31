import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RO } from "../models/index.model";

@Injectable({
    providedIn:'root'
})
export class ThoughtService{
    constructor(
        private http:HttpClient
    ){}

    getAll(){
      return this.http.get<RO>('/api/thought');
    }

    create(param:any){
      return this.http.post<RO>('/api/thought',param);
    }

    delete(id:number){
      return this.http.delete<RO>('/api/thought',{params:{id}});
    }
}
