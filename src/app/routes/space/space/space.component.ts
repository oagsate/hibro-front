import { Component, OnInit } from "@angular/core";
import { NzMessageService } from "ng-zorro-antd/message";
import { NzModalService } from "ng-zorro-antd/modal";
import { estatusOpts, genderOpts } from "src/app/datas/index.data";
import { ListType, User } from "src/app/models/index.model";
import { OptionService } from "src/app/services/option.service";
import { ThoughtService } from "src/app/services/thought.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector:'app-space',
  templateUrl:'./space.component.html',
  styleUrls:['./space.component.less']
})
export class SpaceComponent implements OnInit{
  user:User = this.userSvc.user!;

  constructor(
    private userSvc:UserService,
    public optSvc:OptionService,
    private thoughtSvc:ThoughtService,
    private msgSvc:NzMessageService,
    private modal:NzModalService
  ){}

  ngOnInit(){
  }
}
