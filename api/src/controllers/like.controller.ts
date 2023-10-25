import { Request, Response } from 'express'

import { DinamicServices } from '../services/dinamic.services'
import { getLikedValidation } from '../services/like.services'
import LikeModel from '../models/schema/like'

import { ILike } from '../interface/models.interface'

const getLikes = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1
    const limit = parseInt(req.query.limit as string) || 10
    const { publication: publicationId, user: userId } = req.params

    const Like = new DinamicServices<ILike>(LikeModel)

    const response = await Like.findByParams({ publicationId }, page, limit)
    const isLiked = await getLikedValidation(publicationId, userId)

    if (!response || response.length === 0) {
      return res
        .status(204)
        .json({ msg: 'No content', data: [], isLiked: false })
    }

    res.json({
      msg: 'Successsful',
      data: response,
      isLiked,
      page,
      limit,
      total: response.length,
    })
  } catch (e) {
    console.error({ e })
  }
}

const insertLike = async (req: Request, res: Response) => {
  try {
    const { publication: publicationId, user: userId } = req.params

    const Like = new DinamicServices<ILike>(LikeModel)

    const isLiked = await getLikedValidation(publicationId, userId)

    if (isLiked)
      return res.status(400).json({ msg: 'Already liked this publication' })

    const response = await Like.insert({
      userId,
      publicationId,
    })

    res.send(response)
  } catch (e) {
    console.error({ e })
  }
}

const deleteLike = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params

    const Like = new DinamicServices<ILike>(LikeModel)
    const response = await Like.delete(id)

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

export { getLikes, insertLike, deleteLike }
