import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";

@Component({
  selector:'app-plaza',
  templateUrl:'./plaza.component.html',
  styleUrls:['./plaza.component.less']
})
export class PlazaComponent implements OnInit{
  users :any[] = [];

  constructor(private userSvc:UserService){}

  ngOnInit(){
    this.userSvc.getAll().subscribe(res=>{
      if(res.code===0){
        this.users = res.data;
      }
    });
  }
}
