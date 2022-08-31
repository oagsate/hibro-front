import { Component, OnInit } from "@angular/core";
import { estatusOpts, genderOpts } from "src/app/datas/index.data";
import { User } from "src/app/models/index.model";
import { OptionService } from "src/app/services/option.service";
import { ThoughtService } from "src/app/services/thought.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector:'app-space',
  templateUrl:'./space.component.html',
  styleUrls:['./space.component.less']
})
export class SpaceComponent implements OnInit{
  user?:User;
  thoughts:any = [];


  constructor(private userSvc:UserService,public optSvc:OptionService,private thoughtSvc:ThoughtService){}

  ngOnInit(){
    this.userSvc.getSelf().subscribe(res=>{
      this.user=res.data;
    });
    this.thoughtSvc.getAll().subscribe(res=>{
      this.thoughts = res.data;
    });
  }

  onDelete(){

  }
}
