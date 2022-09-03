import { Component } from '@angular/core';
import { UiService } from './services/ui.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'hibro-front';
  constructor(
    public uiSvc:UiService,
    private userSvc:UserService
  ){
  }

  ngOnInit(){
  }
}
