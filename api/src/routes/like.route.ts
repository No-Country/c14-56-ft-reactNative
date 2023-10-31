import { Router } from 'express'

import {
  deleteLike,
  getLikes,
  insertLike,
} from '../controllers/like.controller'
import { logMiddleware } from '../middleware/log'
import { verifySession } from '../middleware/session'

const router = Router()

router.get('/:publication/:id', getLikes)
router.post('/:publication/:id', insertLike)
router.delete('/:id', deleteLike)

export { router }
