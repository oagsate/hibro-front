import { Component, OnInit } from "@angular/core";
import { NzMessageService } from "ng-zorro-antd/message";
import { NzModalService } from "ng-zorro-antd/modal";
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


  constructor(
    private userSvc:UserService,
    public optSvc:OptionService,
    private thoughtSvc:ThoughtService,
    private msgSvc:NzMessageService,
    private modal:NzModalService
  ){}

  ngOnInit(){
    this.userSvc.getSelf().subscribe(res=>{
      this.user=res.data;
    });
    this.fetchThought();
  }

  fetchThought(){
    this.thoughtSvc.getAll().subscribe(res=>{
      this.thoughts = res.data;
    });
  }

  onDeleteClick(id:number){
    this.modal.confirm({
      nzTitle: '确认删除',
      nzContent: '确定删除此项记录吗？',
      nzOnOk: () => this.deleteThought(id),
      nzOkDanger:true
    });
  }

  deleteThought(id:number){
    this.thoughtSvc.delete(id).subscribe(res=>{
      if(res.code === 0){
        this.msgSvc.success('操作成功');
        this.fetchThought();
      }
    });
  }
}
