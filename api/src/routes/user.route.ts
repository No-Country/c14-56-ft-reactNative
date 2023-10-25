import { Router } from 'express'

import {
  getUsers,
  getUser,
  insertUser,
  updateUser,
  deleteUser,
} from '../controllers/user.controller'
import { logMiddleware } from '../middleware/log'
import { verifySession } from '../middleware/session'

const router = Router()

router.get('/:id', getUser)
router.get('/', getUsers)
router.post('/', insertUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

export { router }
