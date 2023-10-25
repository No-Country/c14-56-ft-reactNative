import { Request, Response } from 'express'

import { DinamicServices } from '../services/dinamic.services'
import FollowerModel from '../models/schema/follower'

import { IFollower } from '../interface/models.interface'
import { handleHttp } from '../utils/error.handle'

const getFollowers = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params

    const response = await FollowerModel.find({}, { _id: id }).sort({
      fecha: 1,
    })

    res.send(response)
  } catch (e) {
    handleHttp(res, 'ERROR_GET_SECTIONS', e)
  }
}

const getFolloweds = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params

    const Follower = new DinamicServices<IFollower>(FollowerModel)
    const response = await Follower.findByParams({ userFollowed: id })

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

const getOneFollower = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params

    const Follower = new DinamicServices<IFollower>(FollowerModel)
    const response = await Follower.getOne(id)

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

const insertFollower = async (req: Request, res: Response) => {
  try {
    const { body } = req

    const Follower = new DinamicServices<IFollower>(FollowerModel)
    const response = await Follower.insert(body)

    res.send(response)
  } catch (e) {
    handleHttp(res, 'ERROR_GET_SECTIONS', e)
  }
}

const updateFollower = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    if (!id) return

    const data = req?.body
    const Follower = new DinamicServices<IFollower>(FollowerModel)
    const response = await Follower.update(id, data)

    res.send(response)
  } catch (e) {
    handleHttp(res, 'ERROR_GET_SECTIONS', e)
  }
}

const deleteFollower = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params

    const Follower = new DinamicServices<IFollower>(FollowerModel)
    const response = await Follower.delete(id)

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

export {
  getFolloweds,
  getOneFollower,
  getFollowers,
  insertFollower,
  updateFollower,
  deleteFollower,
}
