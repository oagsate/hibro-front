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
  user?:User;

  constructor(
    private userSvc:UserService,
    private thoughtSvc:ThoughtService,
    private modal:NzModalService,
    private msgSvc:NzMessageService
  ){}

  ngOnInit(){
    this.userSvc.getSelf().subscribe(res=>{
      this.user = res.data;
      this.fetchThought();
    });
  }

  fetchThought(){
    this.thoughtSvc.getAll().subscribe(res=>{
      if(res.code===0){
        this.list = res.data;
      }
    });
  }
  onDeleteClick({id,type}:{id:number,type:ListType}){
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
