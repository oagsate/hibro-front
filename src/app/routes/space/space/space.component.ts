import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";

@Component({
  selector:'app-space',
  templateUrl:'./space.component.html',
  styleUrls:['./space.component.less']
})
export class SpaceComponent implements OnInit{
  users :any[] = [];

  constructor(private userSvc:UserService){}

  ngOnInit(){
    1;
  }
}
