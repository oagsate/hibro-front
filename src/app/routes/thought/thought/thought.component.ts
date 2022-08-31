import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NzMessageService } from "ng-zorro-antd/message";
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
  constructor(
    private userSvc:UserService,
    public optSvc:OptionService,
    private thoughtSvc:ThoughtService,
    private msgSvc:NzMessageService,
    private router:Router
  ){}

  ngOnInit(){
    return;
  }

  onSubmit(){
    this.thoughtSvc.create({content:this.content}).subscribe(res=>{
      if(res.code===0){
        this.msgSvc.success('提交成功');
        this.router.navigateByUrl('/space');
      }
    });
  }
}
