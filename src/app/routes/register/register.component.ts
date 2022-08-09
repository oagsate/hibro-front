import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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
        private fb:FormBuilder
    ){}

    onRegister(){
        if (this.form.valid) {
            console.log('submit', this.form.value);
          } else {
            Object.values(this.form.controls).forEach(control => {
              if (control.invalid) {
                control.markAsDirty();
                control.updateValueAndValidity({ onlySelf: true });
              }
            });
          }
    }
}