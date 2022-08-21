import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { NzMessageService } from "ng-zorro-antd/message";
import { UserService } from "src/app/services/user.service";

@Component({
    selector:'app-register',
    templateUrl:'./register.component.html',
    styleUrls:['./register.component.less']
})
export class RegisterComponent{
    form=this.fb.group({
        name:[null,[Validators.required]],
        password:[null,[Validators.required]],
        birthday:[null,[Validators.required]],
        height:[null,[Validators.required]],
        weight:[null,[Validators.required]]
    });

    constructor(
        private fb:FormBuilder,
        private userSvc:UserService,
        private msgSvc:NzMessageService,
        private router:Router
    ){}

    onSubmit(){
        if (this.form.valid) {
          this.register();
        } else {
          Object.values(this.form.controls).forEach(control => {
            if (control.invalid) {
              control.markAsDirty();
              control.updateValueAndValidity({ onlySelf: true });
            }
          });
        }
    }

    register(){
      this.userSvc.register(this.form.value).subscribe((res=>{
          this.msgSvc.success('注册成功')
          this.router.navigateByUrl('plaza');
    }))
    }
}
