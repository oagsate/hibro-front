import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { genderOpts } from 'src/app/datas/index.data';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less'],
})
export class RegisterComponent {
  form = this.fb.group({
    name: [null, [Validators.required]],
    password: [null, [Validators.required]],
    birthday: [null, [Validators.required]],
    gender: [null, [Validators.required]],
  });
  loading = false;
  genderOpts = genderOpts;

  constructor(
    private fb: FormBuilder,
    private userSvc: UserService,
    private msgSvc: NzMessageService,
    private router: Router,
    private modal: NzModalService
  ) {}

  onSubmit() {
    if (this.form.valid) {
      this.showModal();
    } else {
      Object.values(this.form.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  showModal() {
    this.modal.confirm({
      nzTitle: '确认提交',
      nzContent: '注册后用户名、生日、性别将不能更改，确定提交吗？',
      nzOnOk: () => this.register(),
    });
  }

  register() {
    this.loading = true;
    this.userSvc.register(this.form.value).subscribe({
      next: (res) => {
        this.msgSvc.success('注册成功');
        this.router.navigateByUrl('plaza');
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  onLoginClick() {
    this.router.navigateByUrl('login');
  }
}
