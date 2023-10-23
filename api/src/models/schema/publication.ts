import { Schema, model } from 'mongoose'
import { IPublication } from '../../interface/models.interface'

const PublicationSchema = new Schema<IPublication>(
  {
    userId: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: Object,
      default: {
        path: '',
        public_id: '',
        tag: 'default',
        format: '',
      },
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

const PublicationModel = model<IPublication>(
  'publications',
  PublicationSchema,
  'publication'
)

export default PublicationModel
