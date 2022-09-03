import { Component, OnInit } from "@angular/core";
import { NzMessageService } from "ng-zorro-antd/message";
import { NzModalService } from "ng-zorro-antd/modal";
import { ListType, User } from "src/app/models/index.model";
import { ThoughtService } from "src/app/services/thought.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector:'app-plaza',
  templateUrl:'./plaza.component.html',
  styleUrls:['./plaza.component.less']
})
export class PlazaComponent implements OnInit{
  list :any[] = [];
  user:User = this.userSvc.user!;

  constructor(
    private userSvc:UserService,
    private thoughtSvc:ThoughtService,
    private modal:NzModalService,
    private msgSvc:NzMessageService
  ){}

  ngOnInit(){

  }
}
