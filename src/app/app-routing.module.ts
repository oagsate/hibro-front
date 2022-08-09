import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './routes/login/login.component';
import { RegisterComponent } from './routes/register/register.component';

const routes: Routes = [
  { path: '', redirectTo:'plaza',pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  {
    path:'register',component:RegisterComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
