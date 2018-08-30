import { SessionService } from './services/session.service'
import { AuthService } from './services/auth.service'
import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UserNavComponent } from './layout/user-nav/user-nav.component'
import { HeaderComponent } from './layout/header/header.component'
import { SidebarComponent } from './layout/sidebar/sidebar.component'
import { SidebarSearchComponent } from './layout/sidebar-search/sidebar-search.component'
import { BreadcrumbComponent } from './layout/breadcrumb/breadcrumb.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    UserNavComponent,
    HeaderComponent,
    SidebarComponent,
    SidebarSearchComponent,
    BreadcrumbComponent
  ],
  exports: [
    UserNavComponent,
    HeaderComponent,
    SidebarComponent,
    SidebarSearchComponent,
    BreadcrumbComponent
  ],
  providers: [
    AuthService,
    SessionService
  ]
})
export class CoreModule { }
