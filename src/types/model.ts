import { SortDirection } from './enums'

export interface UserData {
    fullName: string
    role: string
    userName: string
}

export interface SessionData {
    userData: UserData
    accessToken: string
}

export interface EntityList<T> {
    count: number
    items: Array<T>
}

export interface QueryParams {
    page: number
    quantity: number
    sortBy: string
    sortDirective: SortDirection
    query: string,
}
