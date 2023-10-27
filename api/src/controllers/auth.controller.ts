import { Request, Response } from 'express'

import { Auth } from '../services/auth.services'
import { DinamicServices } from '../services/dinamic.services'
import UserModel from '../models/schema/user'
import { handleHttp } from '../utils/error.handle'

import { IUser } from '../interface/models.interface'
import { IAuth } from '../interface/auth.interface'
import { hash } from 'bcryptjs'
import { encrypt } from '../utils/bcrypt.handle'

const register = async ({ body }: Request, res: Response) => {
  try {
    const User = new DinamicServices<IUser>(UserModel)
    const { password } = body

    const passwordEncript = await encrypt(password)
    body.password = passwordEncript

    const response = await User.insert(body)

    res.send(response)
  } catch (e) {
    console.error({ e })
  }
}

const login = async ({ body }: Request, res: Response) => {
  try {
    const { email, password }: IAuth = body

    const auth = new Auth()

    const response = await auth.loginUser({ email, password })

    if (typeof response === 'string') {
      res.status(400)
      res.send('Email or password are invalid')
    }

    res.send(response)
  } catch (e) {
    console.error({ e })
  }
}

export { login, register }
