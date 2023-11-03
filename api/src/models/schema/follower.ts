import { Schema, model } from 'mongoose'
import { IFollower } from '../../interface/models.interface'

const FollowerSchema = new Schema<IFollower>(
  {
    userFollower: {
      type: String,
      required: true,
    },
    userFollowed: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const FollowerModel = model<IFollower>('followers', FollowerSchema, 'follower')

export default FollowerModel
