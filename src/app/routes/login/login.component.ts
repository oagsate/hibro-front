import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { StorageService } from 'src/app/services/storage.service';
import { UiService } from 'src/app/services/ui.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent {
  username = '';
  password = '';
  loading = false;
  constructor(
    private userSvc: UserService,
    private msgSvc: NzMessageService,
    private router: Router,
    private storageSvc: StorageService,
    private uiSvc: UiService
  ) {}

  onLogin() {
    if (!this.username || !this.password) {
      this.msgSvc.warning('请输入用户名和密码');
      return;
    }
    this.loading = true;
    this.userSvc
      .login({
        name: this.username,
        password: this.password,
      })
      .subscribe((res) => {
        this.router.navigateByUrl('plaza');
      });
  }

  onRegister() {
    this.router.navigateByUrl('register');
  }

  onKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.onLogin();
    }
  }
}
