import { Schema, model } from 'mongoose'
import { IComment } from '../../interface/models.interface'

const CommentSchema = new Schema<IComment>(
  {
    text: {
      type: String,
      required: true,
    },
    publicationId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const CommentModel = model<IComment>('comments', CommentSchema, 'comment')

export default CommentModel
