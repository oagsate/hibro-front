import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class StorageService{
  setItem(key:string,data:any){
    window.localStorage.setItem(key,JSON.stringify(data));
  }

  getItem(key:string){
    const str = window.localStorage.getItem(key);
    if(str){
      return JSON.parse(str);
    }
  }

  removeItem(key:string){
    window.localStorage.removeItem(key);
  }
}
