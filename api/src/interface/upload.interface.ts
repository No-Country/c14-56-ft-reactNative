import fileUpload from 'express-fileupload'

export interface IUploads {
  file: fileUpload.UploadedFile
  validExpension?: []
  dir?: string
}

export interface IFile {
  name: string
}
