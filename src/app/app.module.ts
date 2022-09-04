import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './routes/login/login.component';
import { SharedModule } from './shared/shared.module';
import { RegisterComponent } from './routes/register/register.component';
import { AppInterceptor } from './http-interceptor';
import { MainLayoutComponent } from './routes/main-layout/main-layout.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
