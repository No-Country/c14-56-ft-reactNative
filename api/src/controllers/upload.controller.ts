import { Request, Response } from 'express'
import { UploadApiResponse } from 'cloudinary'
import { IHistory, IUser } from '../interface/models.interface'
import { DinamicServices } from '../services/dinamic.services'
import { Upload } from '../services/upload.services'
import UserModel from '../models/schema/user'
import HistoryModel from '../models/schema/history'

const removeTagValidation = ['profile']
const multiUploadValidation = ['history']

const updatedImage = async (req: Request, res: Response) => {
  try {
    const { id, collection } = req.params
    const User = new DinamicServices<IUser>(UserModel)
    const History = new DinamicServices<IHistory>(HistoryModel)
    const FileUpload = new Upload(collection, id)

    // Validation
    if (!req.files || !req.files.file) {
      return res
        .status(400)
        .send('No files were uploaded or upload a valid extension.')
    }

    const file = req.files.file

    // Get the user model
    let model: IUser | null
    model = await User.getOne(id)

    if (!model) {
      return res.status(400).json({
        msg: `Don't exist any User with this ID: ${id}`,
      })
    }

    // Implementation
    const { photoProfile } = model

    if (Array.isArray(file)) {
      if (!multiUploadValidation.includes(collection)) {
        console.error('This functionality is only to history tags')
        res.status(400).json({ msg: 'Multiupload is only to history services' })
      }

      const filesArray: UploadApiResponse[] = await FileUpload.multiUpload(file)
      const response: IHistory[] = []

      for (const data of filesArray) {
        const { public_id, secure_url, format } = data
        const history = await History.insert({
          path: {
            path: secure_url,
            public_id: public_id,
            tag: collection,
            format,
          },
          userId: id,
        })

        if (!history) {
          throw new Error('Something went wrong during the upload')
        }
        response.push(history)
      }
      res.status(200).json({ msg: 'Successful', data: response })
    } else {
      const { public_id, secure_url, format } =
        await FileUpload.singleUpload(file)

      let response
      switch (collection) {
        case 'profile':
          await FileUpload.deleteFile(photoProfile.public_id, photoProfile.tag)
          response = await User.update(id, {
            photoProfile: {
              path: secure_url,
              public_id: public_id,
              tag: collection,
              format,
            },
          })
          if (!response) {
            throw new Error('Something went wrong during the upload')
          }
          break

        case 'history':
          response = await History.insert({
            path: {
              path: secure_url,
              public_id: public_id,
              tag: collection,
              format,
            },
            userId: id,
          })
          if (!response) {
            throw new Error('Something went wrong during the upload')
          }
          break
        default:
          break
      }

      res.status(200).json({ msg: 'Successful', data: response })
    }
  } catch (e) {
    console.error(e)
  }
}

const deleteImage = async ({ params }: Request, res: Response) => {
  try {
    const { public_id } = params

    const FileUpload = new Upload('none', public_id)

    const response = await FileUpload.deleteFile(public_id, 'none')

    res.status(200).json({ msg: 'Successful', data: response })
  } catch (e) {
    console.error(e)
    res.status(400).json({ msg: 'Something Failed, please try again' })
  }
}

export { updatedImage, deleteImage }
