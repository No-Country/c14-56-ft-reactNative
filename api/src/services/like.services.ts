import { ILike } from '../interface/models.interface'
import LikeModel from '../models/schema/like'
import { DinamicServices } from './dinamic.services'

const getLikedValidation = async (publicationId: string, userId: string) => {
  try {
    const Like = new DinamicServices<ILike>(LikeModel)

    const response: ILike[] | null = await Like.findByParams({
      publicationId,
      userId,
    })

    if (response) {
      if (response.length > 0) return true
    }

    return false
  } catch (e) {
    console.error(e)
  }
}

export { getLikedValidation }
