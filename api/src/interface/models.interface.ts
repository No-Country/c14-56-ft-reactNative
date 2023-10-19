import { Document } from 'mongoose'

export interface IPhoto {
  path: string
  public_id: string
  tag: string
  format: string
}

export interface IUser extends Document {
  id: string
  name: string
  email: string
  password: string
  username: string
  photoProfile: IPhoto
  role: string
  description: string
  birthday: Date
  country: string
  status: number
}

export interface IHistory extends Document {
  id: string
  path: IPhoto
  userId: string
  status: number
}

export interface IMessages {
  id: string
  description: string
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

export interface IFollower {
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
