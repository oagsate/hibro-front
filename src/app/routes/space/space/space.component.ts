import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { estatusOpts, genderOpts } from 'src/app/datas/index.data';
import { ListType, User } from 'src/app/models/index.model';
import { OptionService } from 'src/app/services/option.service';
import { ThoughtService } from 'src/app/services/thought.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.less'],
})
export class SpaceComponent implements OnInit {
  user?: User;
  self = this.userSvc.user!;

  get avatarUrl() {
    if (this.user) {
      return `http://localhost/images/${this.user.id}/${this.user.avatar}`;
    }
    return '';
  }

  constructor(
    private userSvc: UserService,
    public optSvc: OptionService,
    private thoughtSvc: ThoughtService,
    private msgSvc: NzMessageService,
    private modal: NzModalService,
    private route: ActivatedRoute
  ) {
    this.route.queryParamMap.subscribe((v) => {
      this.prepareData(v);
    });
  }

  ngOnInit() {}

  prepareData(v: ParamMap) {
    const uid = parseInt(v.get('uid') ?? '');
    if (uid) {
      this.userSvc.getByUid(uid).subscribe((res) => {
        this.user = res;
      });
    } else {
      this.user = this.userSvc.user;
    }
  }
}
