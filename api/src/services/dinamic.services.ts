import { Model, Document } from 'mongoose'
import { IUser } from '../interface/models.interface'

export class DinamicServices<T extends Document> {
  private schemaModel: Model<T>

  constructor(schemaModel: Model<T>) {
    this.schemaModel = schemaModel
  }

  insert(data: any): Promise<T | null> {
    return new Promise((resolve, reject) => {
      const response = this.schemaModel.create(data)
      if (!response) reject('Error! Insert action failed')

      resolve(response)
    })
  }

  getOne(id: string): Promise<T | null> {
    return new Promise((resolve, reject) => {
      if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
        reject('Please type valid ID')
      }

      const response = this.schemaModel.findById(id)
      if (!response) reject('Error! Find action failed')
      resolve(response)
    })
  }

  findByParams(data: any, order: any = -1): Promise<T[] | null> {
    return new Promise(async (resolve, reject) => {
      if (!data) {
        reject('Error! Select a valid data')
        return
      }

      try {
        const response = await this.schemaModel
          .find(data)
          .sort({ createdAt: order })
        resolve(response)
      } catch (error) {
        reject('Error! Find action failed')
      }
    })
  }

  get(): Promise<T[] | null> {
    return new Promise((resolve, reject) => {
      const response = this.schemaModel.find({}).sort({ createdAt: -1 })
      if (!response) reject("Didn't find any match")
      resolve(response)
    })
  }

  update(id: string, data: any): Promise<T | null> {
    return new Promise((resolve, reject) => {
      if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
        reject('ID no proporcionado')
      }

      const response = this.schemaModel.findByIdAndUpdate(id, data, {
        new: true,
      })
      if (!response) reject('Error! Update action failed')
      resolve(response)
    })
  }

  delete(id: string): Promise<object | null> {
    return new Promise((resolve, reject) => {
      if (!id || !id.match(/^[0-9a-fA-F]{24}$/)) {
        reject('ID no proporcionado')
      }

      const response = this.schemaModel.findByIdAndDelete(id)
      if (!response) reject('Error! Delete action failed')
      resolve(response)
    })
  }
}
