import { Request, Response } from 'express'

import { DinamicServices } from '../services/dinamic.services'
import HistoryModel from '../models/schema/history'

import { IHistory } from '../interface/models.interface'
import { handleHttp } from '../utils/error.handle'

const getHistories = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1
    const limit = parseInt(req.query.limit as string) || 10

    const History = new DinamicServices<IHistory>(HistoryModel)
    const response = await History.findByParams({}, page, limit, 1)

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

const getHistory = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params

    const History = new DinamicServices<IHistory>(HistoryModel)
    const response = await History.getOne(id)

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

const getHistoryByParams = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const page = parseInt(req.query.page as string) || 1
    const limit = parseInt(req.query.limit as string) || 10

    const History = new DinamicServices<IHistory>(HistoryModel)
    const response = await History.findByParams({ _id: id }, page, limit)

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

const insertHistory = async (req: Request, res: Response) => {
  try {
    const { body } = req

    const History = new DinamicServices<IHistory>(HistoryModel)
    const response = await History.insert(body)

    res.send(response)
  } catch (e) {
    console.error({ e })
  }
}
const updateHistory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    if (!id) return

    const data = req?.body
    const History = new DinamicServices<IHistory>(HistoryModel)
    const response = await History.update(id, data)

    res.send(response)
  } catch (e) {
    console.error({ e })
  }
}
const deleteHistory = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params

    const History = new DinamicServices<IHistory>(HistoryModel)
    const response = await History.delete(id)

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
  getHistory,
  getHistories,
  insertHistory,
  getHistoryByParams,
  deleteHistory,
}
