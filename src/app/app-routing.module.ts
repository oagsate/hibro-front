import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './routes/login/login.component';
import { MainLayoutComponent } from './routes/main-layout/main-layout.component';
import { RegisterComponent } from './routes/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'plaza', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'plaza',
    component: MainLayoutComponent,
    loadChildren: () =>
      import('./routes/plaza/plaza.module').then((m) => m.PlazaModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'notice',
    component: MainLayoutComponent,
    loadChildren: () =>
      import('./routes/notice/notice.module').then((m) => m.NoticeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'space',
    component: MainLayoutComponent,
    loadChildren: () =>
      import('./routes/space/space.module').then((m) => m.SpaceModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'thought',
    component: MainLayoutComponent,
    loadChildren: () =>
      import('./routes/thought/thought.module').then((m) => m.ThoughtModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: MainLayoutComponent,
    loadChildren: () =>
      import('./routes/profile/profile.module').then((m) => m.ProfileModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'journal',
    component: MainLayoutComponent,
    loadChildren: () =>
      import('./routes/journal/journal.module').then((m) => m.JournalModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
