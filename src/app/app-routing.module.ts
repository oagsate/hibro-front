import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './routes/login/login.component';
import { MainLayoutComponent } from './routes/main-layout/main-layout.component';
import { RegisterComponent } from './routes/register/register.component';

const routes: Routes = [
  { path: '', redirectTo:'plaza',pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  {
    path:'register',component:RegisterComponent
  },
  {
    path: 'plaza', component:MainLayoutComponent, loadChildren:() => import('./routes/plaza/plaza.module').then(m => m.PlazaModule)
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
