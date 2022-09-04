import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { estatusOpts, genderOpts } from 'src/app/datas/index.data';
import { User } from 'src/app/models/index.model';
import { OptionService } from 'src/app/services/option.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less'],
})
export class ProfileComponent implements OnInit {
  content = '';
  form = new FormGroup({
    estatus: new FormControl(null),
    education: new FormControl(null),
    height: new FormControl(null),
    weight: new FormControl(null),
    location: new FormControl(null),
    description: new FormControl(null),
  });

  constructor(
    private userSvc: UserService,
    public optSvc: OptionService,
    private msgSvc: NzMessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userSvc.getSelf().subscribe((res) => {
      this.form.patchValue({
        ...res,
        location: res.location?.split('='),
      });
    });
  }

  onSubmit() {
    const value = this.form.value;
    this.userSvc
      .update({
        id: this.userSvc.user?.id!,
        ...value,
        location: value.location && value.location.join('='),
      })
      .subscribe((res) => {
        this.userSvc.init(res);
        this.msgSvc.success('操作成功');
        this.router.navigateByUrl('/space');
      });
  }
}
