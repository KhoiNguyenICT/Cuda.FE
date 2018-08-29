export interface UserData {
    fullName: string
    role: string
    userName: string
}

export interface SessionData {
    userData: UserData
    accessToken: string
}
