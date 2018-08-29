import { storage } from 'utils'
import { BaseService } from './core/services/base.service'
import { Injectable, Injector } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Observable, merge } from 'rxjs'
import { ApiConfig } from './core/services/api-config'
import { AppDataStorageKey } from 'types'

@Injectable({
  providedIn: 'root'
})
export class AppGuard extends BaseService implements CanActivate {

  localStorageKey: string
  statusToken: boolean
  loginRoot: string
  sessionData: any
  constructor(injector: Injector) {
    const config = injector.get<ApiConfig>(ApiConfig)
    super(injector)
    this.setBaseUrl('/api/account')
    this.statusToken = false
    this.localStorageKey = AppDataStorageKey
    this.loginRoot = config.loginRoot
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.sessionData) {
      window.location.href = this.loginRoot
    }
    this.sessionData = storage.get(this.localStorageKey)
    const userName = this.sessionData.userData.userName
    const token = this.sessionData.accsss_token
    this.checkToken(userName, token)
    if (this.statusToken = false) {
      window.location.href = this.loginRoot
    }
    if (this.statusToken = true) {
      return true
    }
  }

  checkToken(username, token) {
    const params = { username, token }
    const success = res => {
      this.statusToken = res
    }
    const error = res => {
      return res.messages
    }

    this.httpClient.post(this.createUrl('/checkToken'), params).subscribe(success, error)
  }
}
