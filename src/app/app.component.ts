import { Component } from '@angular/core';
import { UiService } from './services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'hibro-front';
  loading = 0;
  constructor(public uiSvc:UiService){
    this.uiSvc.loading.subscribe(v=>{
      this.loading = v;
    });
  }
}
