import { Router } from 'express'

import {
  deleteFollower,
  getFollowers,
  getFolloweds,
  getOneFollower,
  insertFollower,
  updateFollower,
  getFollowerRelational,
} from '../controllers/follower.controller'
import { logMiddleware } from '../middleware/log'
import { verifySession } from '../middleware/session'

const router = Router()

router.get('/all/:id', getFollowers)
router.get('/followed/:id', getFolloweds)
router.get('/:id', getOneFollower)
router.get('/:followerId/:followedId', getFollowerRelational)
router.post('/', insertFollower)
router.put('/:id', updateFollower)
router.delete('/:id', deleteFollower)

export { router }
