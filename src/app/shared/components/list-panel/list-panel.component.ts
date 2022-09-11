import { Component, Input, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { estatusOpts, genderOpts, Messages } from 'src/app/datas/index.data';
import { ListType, User } from 'src/app/models/index.model';
import { JournalService } from 'src/app/services/journal.service';
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
      this.fetchJournal();
    }
  }
  @Input() selfId?: number;
  @Input() set showAll(v: boolean | undefined) {
    if (v) {
      this._showAll = v;
      this.fetchAllThought();
      this.fetchAllJournal();
    }
  }

  _uid?: number;
  _showAll?: boolean;
  thoughtList: any[] = [];
  journalList: any[] = [];
  loading = false;
  tabIdx = 0;

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
    private modal: NzModalService,
    private journalSvc: JournalService
  ) {}

  ngOnInit() {}

  fetchThought() {
    this.loading = true;
    this.thoughtSvc.getByUid(this.uid!).subscribe((res) => {
      this.loading = false;
      this.thoughtList = res;
    });
  }

  fetchAllThought() {
    this.loading = true;
    this.thoughtSvc.getAll().subscribe((res) => {
      this.loading = false;
      this.thoughtList = res;
    });
  }

  fetchJournal() {
    this.loading = true;
    this.journalSvc.getByUid(this.uid!).subscribe((res) => {
      this.loading = false;
      this.journalList = res;
    });
  }

  fetchAllJournal() {
    this.loading = true;
    this.journalSvc.getAll().subscribe((res) => {
      this.loading = false;
      this.journalList = res;
    });
  }

  onDeleteClick({ id, type }: { id: number; type: ListType }) {
    this.modal.confirm({
      nzTitle: '确认删除',
      nzContent: '确定删除此项记录吗？',
      nzOnOk: () => this.deleteThought(id, type),
      nzOkDanger: true,
    });
  }

  deleteThought(id: number, type: ListType) {
    if (type === ListType.Thought) {
      this.thoughtSvc.delete(id).subscribe((res) => {
        this.msgSvc.success('操作成功');
        if (this.showAll) {
          this.fetchAllThought();
        } else {
          this.fetchThought();
        }
      });
    } else if (type === ListType.Journal) {
      this.journalSvc.delete(id).subscribe(() => {
        this.msgSvc.success(Messages.OperationOk);
        if (this.showAll) {
          this.fetchAllJournal();
        } else {
          this.fetchJournal();
        }
      });
    }
  }
}
