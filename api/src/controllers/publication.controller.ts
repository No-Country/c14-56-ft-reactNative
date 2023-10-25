import { Request, Response } from 'express'

import { DinamicServices } from '../services/dinamic.services'
import PublicationModel from '../models/schema/publication'

import { IPublication } from '../interface/models.interface'
import { handleHttp } from '../utils/error.handle'
import { Upload } from '../services/upload.services'

const getPublications = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params

    const response = await PublicationModel.find({ userId: { $ne: id } }).sort({
      createdAt: -1,
    })

    res.send(response)
  } catch (e) {
    handleHttp(res, 'ERROR_GET_POST', e)
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
          res.status(401).json({ msg: 'Sorry, something went wrong' })
        }

        res.send(response)
      } else
        res
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
      res.status(401).json({ msg: 'Sorry, something went wrong' })
    }

    res.send(response)
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
