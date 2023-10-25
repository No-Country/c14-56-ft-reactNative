import { Schema, model } from 'mongoose'
import { ILike } from '../../interface/models.interface'

const LikeSchema = new Schema<ILike>(
  {
    userId: {
      type: String,
      required: true,
    },
    publicationId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const LikeModel = model<ILike>('likes', LikeSchema, 'like')

export default LikeModel
