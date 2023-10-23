import { Request, Response } from 'express'

import { DinamicServices } from '../services/dinamic.services'
import PublicationModel from '../models/schema/publication'

import { IPublication } from '../interface/models.interface'
import { handleHttp } from '../utils/error.handle'

const getPublications = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params

    const response = await PublicationModel.find({ userId: { $ne: id } }).sort({
      createdAt: -1,
    })

    res.send(response)
  } catch (e) {
    handleHttp(res, 'ERROR_GET_SECTIONS', e)
  }
}

const getOwnPublications = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params

    const Publication = new DinamicServices<IPublication>(PublicationModel)
    const response = await Publication.findByParams({ userId: id })

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

const getOnePublication = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params

    const Publication = new DinamicServices<IPublication>(PublicationModel)
    const response = await Publication.getOne(id)

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

const insertPublication = async (req: Request, res: Response) => {
  try {
    const { body } = req

    const Publication = new DinamicServices<IPublication>(PublicationModel)
    const response = await Publication.insert(body)

    res.send(response)
  } catch (e) {
    handleHttp(res, 'ERROR_GET_SECTIONS', e)
  }
}

const updatePublication = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    if (!id) return

    const data = req?.body
    const Publication = new DinamicServices<IPublication>(PublicationModel)
    const response = await Publication.update(id, data)

    res.send(response)
  } catch (e) {
    handleHttp(res, 'ERROR_GET_SECTIONS', e)
  }
}

const deletePublication = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params

    const Publication = new DinamicServices<IPublication>(PublicationModel)
    const response = await Publication.delete(id)

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
  getOwnPublications,
  getOnePublication,
  getPublications,
  insertPublication,
  updatePublication,
  deletePublication,
}
