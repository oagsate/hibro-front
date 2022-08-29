import { Component, OnInit } from "@angular/core";
import { estatusOpts, genderOpts } from "src/app/datas/index.data";
import { User } from "src/app/models/index.model";
import { OptionService } from "src/app/services/option.service";
import { ThoughtService } from "src/app/services/thought.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector:'app-thought',
  templateUrl:'./thought.component.html',
  styleUrls:['./thought.component.less']
})
export class ThoughtComponent implements OnInit{
  content = '';
  constructor(private userSvc:UserService,public optSvc:OptionService,private thoughtSvc:ThoughtService){}

  ngOnInit(){
    return;
  }

  onSubmit(){

  }
}
