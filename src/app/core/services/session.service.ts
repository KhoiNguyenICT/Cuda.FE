import { Injectable } from '@angular/core'
import { UserData, SessionData, AppDataStorageKey } from 'types'
import { storage } from 'utils'

@Injectable({
    providedIn: 'root'
})
export class SessionService {

    private appDataStorageKey = AppDataStorageKey
    private sessionData: SessionData

    constructor() {
        this.init()
    }

    get refreshToken(): string {
        this.init()
        return this.get('refreshToken')
    }

    get accessToken() {
        return this.get('accessToken')
    }

    get userData() {
        return this.get('userData') as UserData
    }

    setUserData(userData: UserData) {
        this.set('userData', userData)
    }

    refreshSession(data) {
        this.sessionData = data
        this.sync()
    }

    get(key: string) {
        const value = this.sessionData[key]
        return value
    }

    set(key: string, value: any) {
        this.sessionData[key] = value
        this.sync()
    }

    setCookie(key: string, value: any) {
        document.cookie = `${key}:${value};secure`
    }

    setValues(values: {
        [key: string]: any
    }) {
        this.sessionData = Object.assign({}, this.sessionData, values)
        this.sync()
    }

    remove(keys: string[]) {
        keys.forEach(k => {
            this.sessionData[k] = undefined
        })
        this.sync()
    }

    clear() {
        this.sessionData = {} as SessionData
        this.sync()
    }

    sync() {
        storage.set(this.appDataStorageKey, this.sessionData)
    }

    private init() {
        this.sessionData = storage.get(this.appDataStorageKey) || {}
    }
}
