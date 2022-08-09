import { NgModule } from "@angular/core";
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@NgModule({
    imports:[
        NzMessageModule,
        NzInputModule,
        NzButtonModule,
        NzFormModule,
        NzInputNumberModule,
        NzDatePickerModule,
    ],
    exports:[
        NzMessageModule,
        NzInputModule,
        NzButtonModule,
        NzFormModule,
        NzInputNumberModule,
        NzDatePickerModule
    ]
})
export class SharedModule{}