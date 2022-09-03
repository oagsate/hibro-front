import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ListType, User } from 'src/app/models/index.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.less']
})
export class ListItemComponent implements OnInit {
  @Input() list:any[]=[];
  @Input() uid?:number;
  @Input() selfId?:number;
  @Output() delete:EventEmitter<{id:number,type:ListType}>=new EventEmitter();

  ListType = ListType;

  constructor(
    private userSvc:UserService
  ) { }

  ngOnInit(): void {
  }

  onDeleteClick(id:number,type:ListType){
    this.delete.emit({id,type});
  }

}
