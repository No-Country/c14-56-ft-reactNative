import { Request, Response } from 'express'

import { DinamicServices } from '../services/dinamic.services'
import PublicationModel from '../models/schema/publication'

import { IPublication } from '../interface/models.interface'
import { handleHttp } from '../utils/error.handle'
import { Upload } from '../services/upload.services'

const getPublications = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const page = parseInt(req.query.page as string) || 1
    const limit = parseInt(req.query.limit as string) || 10

    const Publication = new DinamicServices<IPublication>(PublicationModel)
    const response = await Publication.findByParams(
      { userId: { $ne: id } },
      page,
      limit
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
    handleHttp(res, 'ERROR_GET_POST', e)
  }
}

const getOwnPublications = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const page = parseInt(req.query.page as string) || 1
    const limit = parseInt(req.query.limit as string) || 10

    const Publication = new DinamicServices<IPublication>(PublicationModel)
    const response = await Publication.findByParams({ userId: id }, page, limit)

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
    handleHttp(res, 'ERROR_GET_POST', e)
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
    handleHttp(res, 'ERROR_GET_POST', e)
  }
}

const insertPublication = async (req: Request, res: Response) => {
  try {
    const { collection, id } = req.params
    const { description } = req.body

    const Publication = new DinamicServices<IPublication>(PublicationModel)

    if (req.files) {
      const { image } = req.files
      const FileUpload = new Upload(collection, id)

      if (!Array.isArray(image)) {
        const { public_id, secure_url, format } =
          await FileUpload.singleUpload(image)

        const post = {
          userId: id,
          description,
          image: {
            path: secure_url,
            public_id: public_id,
            tag: collection,
            format,
          },
        }
        const response = await Publication.insert(post)

        if (!response) {
          return res.status(401).json({ msg: 'Sorry, something went wrong' })
        }

        return res.send(response)
      } else
        return res
          .status(400)
          .json({ msg: 'Only one image can be upload on this service' })
    }

    const post = {
      userId: id,
      description,
      image: {
        path: 'none',
        public_id: '',
        tag: '',
        format: '',
      },
    }
    const response = await Publication.insert(post)

    if (!response) {
      return res.status(401).json({ msg: 'Sorry, something went wrong' })
    }

    return res.send(response)
  } catch (e) {
    console.error({ e })
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
    handleHttp(res, 'ERROR_GET_POST', e)
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
    handleHttp(res, 'ERROR_GET_POST', e)
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
