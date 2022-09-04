import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { UiService } from 'src/app/services/ui.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.less'],
})
export class MainLayoutComponent {
  user = this.userSvc.user!;

  constructor(
    private userSvc: UserService,
    private router: Router,
    private storageSvc: StorageService,
    public uiSvc: UiService
  ) {}

  logout() {
    this.userSvc.logout().subscribe((res) => {
      if (res.code === 0) {
        this.userSvc.clear();
        this.router.navigateByUrl('login');
      }
    });
  }
}
