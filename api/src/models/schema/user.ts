import { Schema, model, trusted } from 'mongoose'
import { IUser } from '../../interface/models.interface'

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    photoProfile: {
      type: String,
    },
    role: {
      type: String,
    },
    description: {
      type: String,
    },
    birthday: {
      type: Date,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    status: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const SectionModel = model<IUser>('users', UserSchema, 'user')

export default SectionModel
