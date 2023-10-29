import fileUpload from 'express-fileupload'
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary'
import { DinamicServices } from './dinamic.services'

export class Upload {
  collection: string
  idUser: string
  validExpension: string[]
  invalidTag: string[]

  constructor(
    collection: string,
    idUser: string,
    validExpension = ['png', 'jpg', 'jpeg', 'gif', 'webp'],
    invalidTag = ['default']
  ) {
    this.collection = collection
    this.idUser = idUser
    this.validExpension = validExpension
    this.invalidTag = invalidTag

    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.CLOUD_API_KEY,
      api_secret: process.env.CLOUD_API_SECRET,
    })
  }

  singleUpload(file: fileUpload.UploadedFile): Promise<UploadApiResponse> {
    return new Promise((resolve, reject) => {
      const extension = file.name.split('.').pop()

      if (!this.validExpension.includes(`${extension}`))
        return reject(
          `The extension ${extension} isn't valid. Please use this extension: ${this.validExpension}`
        )

      const result = cloudinary.uploader.upload(file.tempFilePath, {
        folder: `${this.idUser}/${this.collection}`,
      })

      if (!result) reject('Error! Sometimes wrong happening on the Upload.')

      resolve(result)
    })
  }

  multiUpload(files: fileUpload.UploadedFile[]): Promise<UploadApiResponse[]> {
    const uploadPromises = files.map(file => this.singleUpload(file))

    return Promise.all(uploadPromises)
      .then(responses => {
        // responses contendrá un array con las respuestas de las subcargas individuales.
        return responses
      })
      .catch(error => {
        // Maneja los errores si alguna de las subcargas falla.
        throw error
      })
  }

  deleteFile(id: string, tag: string) {
    return new Promise((resolve, reject) => {
      if (this.invalidTag.includes(tag))
        resolve("This type of file can't be removed it")

      const result = cloudinary.uploader.destroy(id)
      if (!{ result }) reject('Sometimes wrong happening in the process')

      resolve(result)
    })
  }
}
