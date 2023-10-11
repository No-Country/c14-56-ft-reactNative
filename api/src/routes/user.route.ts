import { Router } from 'express'

import {
  getUsers,
  getUser,
  insertUser,
  updateUser,
  deleteUser,
} from '../controllers/user.controller'
import { logMiddleware } from '../middleware/log'

const router = Router()

router.get('/:id', getUser)
router.get('/', logMiddleware, getUsers)
router.post('/', insertUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

export { router }
