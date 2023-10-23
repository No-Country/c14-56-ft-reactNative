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
      type: Object,
      default: {
        path: 'https://res.cloudinary.com/dxbnpkfiw/image/upload/v1697654047/default/653004793a350c09e7358b7d/blnoaxqhs0rtli6gwdhw.svg',
        public_id: 'default/653004793a350c09e7358b7d/blnoaxqhs0rtli6gwdhw',
        tag: 'default',
        format: 'svg',
      },
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

const UserModel = model<IUser>('users', UserSchema, 'user')

export default UserModel
