import { Request, Response } from 'express'

import { DinamicServices } from '../services/dinamic.services'
import UserModel from '../models/schema/user'

import { IUser } from '../interface/models.interface'
import { handleHttp } from '../utils/error.handle'

const User = new DinamicServices<IUser>(UserModel)

const getUsers = async (req: Request, res: Response) => {
  try {
    const user = new DinamicServices<IUser>(UserModel)
    const response = await user.get()

    res.send(response)
  } catch (e) {
    handleHttp(res, 'ERROR_GET_SECTIONS', e)
  }
}

const getUser = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params

    const user = new DinamicServices<IUser>(UserModel)
    const response = await user.getOne(id)

    response != null
      ? res.send({
          msg: 'Successfull!',
          data: response,
        })
      : res.send({
          msg: 'Sorry, we are not find anything by this params',
        })
  } catch (e) {
    handleHttp(res, 'ERROR_GET_SECTIONS', e)
  }
}

const getByParams = async (req: Request, res: Response) => {
  try {
    const body: IUser = req.body

    const user = new DinamicServices<IUser>(UserModel)
    const response = await user.findByParams(body)

    response != null
      ? res.send({
          msg: 'Successfull!',
          data: response,
        })
      : res.send({
          msg: 'Sorry, we are not find anything by this params',
        })
  } catch (e) {
    handleHttp(res, 'ERROR_GET_SECTIONS', e)
  }
}

const insertUser = async (req: Request, res: Response) => {
  try {
    const { body } = req

    const User = new DinamicServices<IUser>(UserModel)
    const response = await User.insert(body)

    res.send(response)
  } catch (e) {
    handleHttp(res, 'ERROR_GET_SECTIONS', e)
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
    handleHttp(res, 'ERROR_GET_SECTIONS', e)
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
    handleHttp(res, 'ERROR_GET_SECTIONS', e)
  }
}

export { getUser, getUsers, insertUser, updateUser, deleteUser, getByParams }
