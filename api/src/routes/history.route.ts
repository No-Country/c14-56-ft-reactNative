import { Router } from 'express'

import {
  getHistories,
  getHistory,
  insertHistory,
  updateHistory,
  deleteHistory,
} from '../controllers/history.controller'
import { logMiddleware } from '../middleware/log'
import { verifySession } from '../middleware/session'

const router = Router()

router.get('/:id', verifySession, getHistory)
router.get('/', verifySession, getHistories)
router.post('/', insertHistory)
router.put('/:id', updateHistory)
router.delete('/:id', deleteHistory)

export { router }
