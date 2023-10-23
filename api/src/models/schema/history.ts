import { Schema, model } from 'mongoose'
import { IHistory } from '../../interface/models.interface'

const UserSchema = new Schema<IHistory>(
  {
    path: {
      type: Object,
      required: true,
      default: {
        path: 'https://res.cloudinary.com/dxbnpkfiw/image/upload/v1697654047/default/653004793a350c09e7358b7d/blnoaxqhs0rtli6gwdhw.svg',
        public_id: 'default/653004793a350c09e7358b7d/blnoaxqhs0rtli6gwdhw',
        tag: 'default',
        format: 'svg',
      },
    },
    userId: {
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

const HistoryModel = model<IHistory>('histories', UserSchema, 'history')

export default HistoryModel
