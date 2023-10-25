import { Request, Response } from 'express'

import { DinamicServices } from '../services/dinamic.services'
import UserModel from '../models/schema/user'

import { IUser } from '../interface/models.interface'
import { handleHttp } from '../utils/error.handle'

const getUsers = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1
    const limit = parseInt(req.query.limit as string) || 10

    const User = new DinamicServices<IUser>(UserModel)
    const response = await User.findByParams({}, page, limit)

    if (!response || response.length === 0) {
      return res.status(204).json({
        msg: 'No content',
      })
    }

    res.json({
      msg: 'Successsful',
      data: response,
      page,
      limit,
      total: response.length,
    })
  } catch (e) {
    console.error({ e })
  }
}

const getUser = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params

    const User = new DinamicServices<IUser>(UserModel)
    const response = await User.getOne(id)

    response != null
      ? res.send({
          msg: 'Successfull!',
          data: response,
        })
      : res.send({
          msg: 'Sorry, we are not find anything by this params',
        })
  } catch (e) {
    console.error({ e })
  }
}

const getByParams = async (req: Request, res: Response) => {
  try {
    const body: IUser = req.body
    const page = parseInt(req.query.page as string) || 1 // Página actual
    const limit = parseInt(req.query.limit as string) || 10

    const User = new DinamicServices<IUser>(UserModel)
    const response = await User.findByParams(body, page, limit)

    if (!response || response.length === 0) {
      return res.status(204).json({
        msg: 'No content',
      })
    }

    res.json({
      msg: 'Successsful',
      data: response,
      page,
      limit,
      total: response.length,
    })
  } catch (e) {
    console.error({ e })
  }
}

const insertUser = async (req: Request, res: Response) => {
  try {
    const { body } = req

    const User = new DinamicServices<IUser>(UserModel)
    const response = await User.insert(body)

    res.send(response)
  } catch (e) {
    console.error({ e })
  }
}
const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    if (!id) return

    const data = req?.body
    const User = new DinamicServices<IUser>(UserModel)
    const response = await User.update(id, data)

    res.send(response)
  } catch (e) {
    console.error({ e })
  }
}
const deleteUser = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params

    const User = new DinamicServices<IUser>(UserModel)
    const response = await User.delete(id)

    response != null
      ? res.send({
          msg: 'Successfull!',
          data: response,
        })
      : res.send({
          msg: 'Sorry, we are not find anything by this params',
        })
  } catch (e) {
    console.error({ e })
  }
}

export { getUser, getUsers, insertUser, updateUser, deleteUser, getByParams }
