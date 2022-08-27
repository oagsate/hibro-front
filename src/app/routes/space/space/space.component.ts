import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/api.model";
import { UserService } from "src/app/services/user.service";

@Component({
  selector:'app-space',
  templateUrl:'./space.component.html',
  styleUrls:['./space.component.less']
})
export class SpaceComponent implements OnInit{
  user?:User;

  constructor(private userSvc:UserService){}

  ngOnInit(){
    this.userSvc.getSelf().subscribe(res=>{
      this.user=res.data;
    });
  }
}
