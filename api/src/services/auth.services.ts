import { Response } from 'express'

import { IAuth } from '../interface/auth.interface'

import userModel from '../models/schema/user'
import { verified } from '../utils/bcrypt.handle'
import { handleHttp } from '../utils/error.handle'
import { IUser } from '../interface/models.interface'
import { JWT } from '../utils/jwt.handle'

export class Auth {
  async loginUser({ email, password }: IAuth) {
    try {
      const user: IUser | null = await userModel.findOne({ email })
      if (!user) return 'NOT_FOUND_USER'

      const jwt = new JWT(email)

      if (!user) return 'Email or password are invalid'

      const token = jwt.generateToke()

      const passwordHash = user?.password
      const isCorrect = await verified(password, passwordHash)

      return isCorrect ? { token, user } : 'INVALID_PASSWORD'
    } catch (error) {
      console.error(error)
    }
  }
}
