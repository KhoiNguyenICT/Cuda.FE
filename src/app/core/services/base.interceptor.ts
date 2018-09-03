import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http'
import { storage } from 'utils'
import { AppDataStorageKey } from 'types'

export class BaseInterceptor implements HttpInterceptor {

    sessionData: any
    localStorageKey: string

    constructor () {
        this.localStorageKey = AppDataStorageKey
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        this.sessionData = storage.get(this.localStorageKey)
        const token = this.sessionData.accsss_token
        const newRequest = req.clone({
            headers: req.headers.set(
                'Authorization', `bearer ${token}`
            )
        })
        return next.handle(newRequest)
    }
}
