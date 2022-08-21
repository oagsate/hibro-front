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


@NgModule({
    imports:[
        NzMessageModule,
        NzInputModule,
        NzButtonModule,
        NzFormModule,
        NzInputNumberModule,
        NzDatePickerModule,
        NzLayoutModule,
        NzMenuModule,
        NzDropDownModule,
        NzIconModule
    ],
    exports:[
        NzMessageModule,
        NzInputModule,
        NzButtonModule,
        NzFormModule,
        NzInputNumberModule,
        NzDatePickerModule,
        NzLayoutModule,
        NzMenuModule,
        NzDropDownModule,
        NzIconModule
    ]
})
export class SharedModule{}
