import { Router } from 'express'

import {
  getComment,
  getComments,
  insertComment,
  updateComment,
  deleteComment,
} from '../controllers/comment.controller'
import { logMiddleware } from '../middleware/log'
import { verifySession } from '../middleware/session'

const router = Router()

router.get('/:id', getComment)
router.get('/all/:publication', getComments)
router.post('/:publication', insertComment)
router.delete('/:id', deleteComment)

export { router }
