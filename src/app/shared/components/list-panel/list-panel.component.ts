import { Component, Input, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { estatusOpts, genderOpts } from 'src/app/datas/index.data';
import { ListType, User } from 'src/app/models/index.model';
import { OptionService } from 'src/app/services/option.service';
import { ThoughtService } from 'src/app/services/thought.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-panel',
  templateUrl: './list-panel.component.html',
  styleUrls: ['./list-panel.component.less'],
})
export class ListPanelComponent implements OnInit {
  @Input() set uid(v: number | undefined) {
    this._uid = v;
    if (v !== undefined && v !== null) {
      this.fetchThought();
    }
  }
  @Input() selfId?: number;
  @Input() set showAll(v: boolean | undefined) {
    if (v) {
      this._showAll = v;
      this.fetchAllThought();
    }
  }

  _uid?: number;
  _showAll?: boolean;
  list: any[] = [];
  loading = false;

  get uid() {
    return this._uid;
  }

  get showAll() {
    return this._showAll;
  }

  constructor(
    private userSvc: UserService,
    public optSvc: OptionService,
    private thoughtSvc: ThoughtService,
    private msgSvc: NzMessageService,
    private modal: NzModalService
  ) {}

  ngOnInit() {}

  fetchThought() {
    this.loading = true;
    this.thoughtSvc.getByUid(this.uid!).subscribe((res) => {
      this.loading = false;
      this.list = res;
    });
  }

  fetchAllThought() {
    this.loading = true;
    this.thoughtSvc.getAll().subscribe((res) => {
      this.loading = false;
      this.list = res;
    });
  }

  onDeleteClick({ id, type }: { id: number; type: ListType }) {
    this.modal.confirm({
      nzTitle: '确认删除',
      nzContent: '确定删除此项记录吗？',
      nzOnOk: () => this.deleteThought(id),
      nzOkDanger: true,
    });
  }

  deleteThought(id: number) {
    this.thoughtSvc.delete(id).subscribe((res) => {
      this.msgSvc.success('操作成功');
      if (this.showAll) {
        this.fetchAllThought();
      } else {
        this.fetchThought();
      }
    });
  }
}
