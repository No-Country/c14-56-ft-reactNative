import { Request, Response } from 'express'

import { DinamicServices } from '../services/dinamic.services'
import HistoryModel from '../models/schema/history'

import { IHistory } from '../interface/models.interface'
import { handleHttp } from '../utils/error.handle'

const getHistories = async (req: Request, res: Response) => {
  try {
    const History = new DinamicServices<IHistory>(HistoryModel)
    const response = await History.get()

    res.send(response)
  } catch (e) {
    handleHttp(res, 'ERROR_GET_SECTIONS', e)
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
    handleHttp(res, 'ERROR_GET_SECTIONS', e)
  }
}

const insertHistory = async (req: Request, res: Response) => {
  try {
    const { body } = req

    const History = new DinamicServices<IHistory>(HistoryModel)
    const response = await History.insert(body)

    res.send(response)
  } catch (e) {
    handleHttp(res, 'ERROR_GET_SECTIONS', e)
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
    handleHttp(res, 'ERROR_GET_SECTIONS', e)
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
    handleHttp(res, 'ERROR_GET_SECTIONS', e)
  }
}

export { getHistory, getHistories, insertHistory, updateHistory, deleteHistory }
