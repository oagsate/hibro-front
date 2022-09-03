import { NgModule } from "@angular/core";
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { LabelPipe } from "./pipes/label.pipe";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ListItemComponent } from "../component/list-item/list-item.component";
import { CommonModule } from "@angular/common";


@NgModule({
    imports:[
      FormsModule,
      CommonModule,
      ReactiveFormsModule,
      NzMessageModule,
      NzInputModule,
      NzButtonModule,
      NzFormModule,
      NzInputNumberModule,
      NzDatePickerModule,
      NzLayoutModule,
      NzMenuModule,
      NzDropDownModule,
      NzIconModule,
      NzSpinModule,
      NzTabsModule,
      NzPopconfirmModule,
      NzModalModule
    ],
    declarations:[
      LabelPipe,
      ListItemComponent,
    ],
    exports:[
      FormsModule,
      CommonModule,
      ReactiveFormsModule,
        NzMessageModule,
        NzInputModule,
        NzButtonModule,
        NzFormModule,
        NzInputNumberModule,
        NzDatePickerModule,
        NzLayoutModule,
        NzMenuModule,
        NzDropDownModule,
        NzIconModule,
        NzSpinModule,
        NzTabsModule,
        NzPopconfirmModule,
        NzModalModule,
        LabelPipe,
        ListItemComponent
    ]
})
export class SharedModule{}
