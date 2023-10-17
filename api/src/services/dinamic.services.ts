import { Model, Document } from 'mongoose'
import { IUser } from '../interface/models.interface'

export class DinamicServices<T extends Document> {
  private schemaModel: Model<T>

  constructor(schemaModel: Model<T>) {
    this.schemaModel = schemaModel
  }

  async insert(data: any): Promise<T | null> {
    try {
      const response = await this.schemaModel.create(data)
      return response
    } catch (error) {
      console.error('Error al insertar:', error)
      return null
    }
  }

  async getOne(userId: string): Promise<T | null> {
    try {
      if (!userId) {
        console.log('ID no proporcionado')
        return null
      }

      if (!userId.match(/^[0-9a-fA-F]{24}$/)) {
        console.log('ID no válido')
        return null
      }

      const section = await this.schemaModel.findById(userId)
      return section
    } catch (error) {
      console.error('Error al obtener sección:', error)
      return null
    }
  }

  async findOne(user: IUser): Promise<T | null> {
    try {
      if (!user) {
        console.log('Data is empty')
        return null
      }

      const response = await this.schemaModel.findOne({ user })
      return response
    } catch (error) {
      console.error('Error al obtener sección:', error)
      return null
    }
  }

  async get(): Promise<T[]> {
    return await this.schemaModel.find({})
  }

  async update(userId: string, data: any): Promise<T | null> {
    try {
      if (!userId) {
        console.log('ID no proporcionado')
        return null
      }

      if (!userId.match(/^[0-9a-fA-F]{24}$/)) {
        console.log('ID no válido')
        return null
      }

      const section = await this.schemaModel.findByIdAndUpdate(userId, data, {
        new: true,
      })
      return section
    } catch (error) {
      console.error('Error al actualizar sección:', error)
      return null
    }
  }

  async delete(id: string): Promise<object | null> {
    try {
      if (!id) {
        console.log('ID no proporcionado')
        return null
      }

      if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        console.log('ID no válido')
        return null
      }

      return await this.schemaModel.findByIdAndDelete(id)
    } catch (error) {
      console.error('Error al eliminar:', error)
      return null
    }
  }
}
