import { AppGuard } from './app.guard'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './login/login.component'

const routes: Routes = [
  {
    path: 'main',
    loadChildren: './main/main.module#MainModule',
    canActivate: [AppGuard]
  },
  {
    path: 'login/:token',
    component: LoginComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
