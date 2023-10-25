import { Request, Response } from 'express'

import { DinamicServices } from '../services/dinamic.services'
import CommentModel from '../models/schema/comment'

import { IComment } from '../interface/models.interface'

const getComments = async (req: Request, res: Response) => {
  try {
    const { publication: publicationId } = req.params
    const page = parseInt(req.query.page as string) || 1
    const limit = parseInt(req.query.limit as string) || 10

    const Comment = new DinamicServices<IComment>(CommentModel)

    const response = await Comment.findByParams(
      { publicationId },
      page,
      limit,
      1
    )

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

const getComment = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params

    const Comment = new DinamicServices<IComment>(CommentModel)
    const response = await Comment.getOne(id)

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
    const body: IComment = req.body
    const page = parseInt(req.query.page as string) || 1
    const limit = parseInt(req.query.limit as string) || 10

    const Comment = new DinamicServices<IComment>(CommentModel)
    const response = await Comment.findByParams(body, page, limit)

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

const insertComment = async (req: Request, res: Response) => {
  try {
    const { body } = req
    const { publication: publicationId } = req.params

    const Comment = new DinamicServices<IComment>(CommentModel)
    body.publicationId = publicationId

    const response = await Comment.insert(body)

    res.send(response)
  } catch (e) {
    console.error({ e })
  }
}

const updateComment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    if (!id) return

    const data = req?.body
    const Comment = new DinamicServices<IComment>(CommentModel)
    const response = await Comment.update(id, data)

    res.send(response)
  } catch (e) {
    console.error({ e })
  }
}

const deleteComment = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params

    const Comment = new DinamicServices<IComment>(CommentModel)
    const response = await Comment.delete(id)

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

export {
  getComment,
  getComments,
  insertComment,
  updateComment,
  deleteComment,
  getByParams,
}
