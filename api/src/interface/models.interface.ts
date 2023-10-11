
export interface IUser {
    id: string
    nombre: string
    email: string
    password: string
    username: string
    photoProfile: string
    role: string
    description: string
    status: number
}

export interface IMessages {
    id: string
    description: string
    date: Date
    userSendId: string
    userReceiveId: string
}

export interface IPublication {
    id: string
    description: string
    date: Date
    role: string
    userId: string
    status: string
}

export interface IFollower{
    id: string
    userFollower: string
    userFollow: string
}

export interface ILike {
    id: string
    publicationId: string
    userId: string
}

export interface ICommets {
    id: string
    text: string
    date: Date
    publicationId: string
    userId: string
}