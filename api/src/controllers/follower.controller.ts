import { Request, Response } from 'express'

import { DinamicServices } from '../services/dinamic.services'
import FollowerModel from '../models/schema/follower'

import { IFollower } from '../interface/models.interface'
import { handleHttp } from '../utils/error.handle'

const getFollowerRelational = async ({ params }: Request, res: Response) => {
  try {
    const { followerId, followedId } = params

    const Follower = new DinamicServices<IFollower>(FollowerModel)
    const response = await Follower.findByParams({
      userFollowed: followedId,
      userFollower: followerId,
    })

    if (Array.isArray(response) && response?.length > 0)
      return res.status(200).json({ match: true, data: response })

    res.status(200).json({ data: false })
  } catch (e) {
    handleHttp(res, 'ERROR_GET_SECTIONS', e)
  }
}

const getFollowers = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params

    const Follower = new DinamicServices<IFollower>(FollowerModel)
    const response = await Follower.findByParams({ userFollower: id })

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

const insertFollower = async ({ body }: Request, res: Response) => {
  try {
    const { userFollowed, userFollower } = body

    const Follower = new DinamicServices<IFollower>(FollowerModel)
    const follow = await Follower.findByParams({
      userFollowed,
      userFollower,
    })

    if (Array.isArray(follow) && follow?.length > 0) {
      return res.status(400).json({
        msg: 'Ya eres seguidor de este usuario',
      })
    }

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
  getFollowerRelational,
  getOneFollower,
  getFollowers,
  insertFollower,
  updateFollower,
  deleteFollower,
}
