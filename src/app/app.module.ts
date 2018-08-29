import { AppGuard } from './app.guard'
import { ApiConfig } from './core/services/api-config'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { environment } from 'environments/environment'
import { HttpClientModule } from '@angular/common/http'
import { MainModule } from './main/main.module'
import { ModalModule, BsDatepickerModule, BsDropdownModule } from 'ngx-bootstrap'
import { NgModule } from '@angular/core'
import { NgProgressModule } from '@ngx-progressbar/core'
import { ReactiveFormsModule } from '@angular/forms'
import { ToastManager } from './toast-manager.service'
import { ToastrService, ToastrModule } from 'ngx-toastr'
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MainModule,
    ToastrModule.forRoot({
      enableHtml: true
    }),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    NgProgressModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ],
  providers: [
    AppGuard,
    {
      provide: ApiConfig,
      useValue: environment,
    },
    {
      provide: ToastrService,
      useClass: ToastManager,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
