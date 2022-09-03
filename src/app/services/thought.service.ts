import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs";
import { ListType, RO } from "../models/index.model";

@Injectable({
    providedIn:'root'
})
export class ThoughtService{
    constructor(
        private http:HttpClient
    ){}

    getAll(){
      return this.http.get<RO>('/api/thought').pipe(tap(v=>{
        v.data.forEach((item:any)=>{
          item.type = ListType.Thought;
        });
      }));
    }

    getByUid(uid:number){
      return this.http.get<RO>(`/api/thought/getByUid/${uid}`).pipe(tap(v=>{
        v.data.forEach((item:any)=>{
          item.type = ListType.Thought;
        });
      }));
    }

    create(param:any){
      return this.http.post<RO>('/api/thought',param);
    }

    delete(id:number){
      return this.http.delete<RO>('/api/thought',{params:{id}});
    }
}
