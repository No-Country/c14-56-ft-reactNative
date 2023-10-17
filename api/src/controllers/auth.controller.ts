import { Request, Response } from 'express'

import { Auth } from '../services/auth.services'
import { DinamicServices } from '../services/dinamic.services'
import userModel from '../models/schema/user'
import { handleHttp } from '../utils/error.handle'

import { IUser } from '../interface/models.interface'
import { IAuth } from '../interface/auth.interface'
import { hash } from 'bcryptjs'
import { encrypt } from '../utils/bcrypt.handle'

const register = async ({ body }: Request, res: Response) => {
  try {
    const user = new DinamicServices<IUser>(userModel)
    const { password } = body

    const passwordEncript = await encrypt(password)
    body.password = passwordEncript

    const response = await user.insert(body)

    res.send(response)
  } catch (e) {
    handleHttp(res, 'ERROR_GET_USER', e)
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
  } catch (error) {}
}

export { login, register }
