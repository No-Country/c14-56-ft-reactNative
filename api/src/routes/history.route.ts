import { Router } from 'express'

import {
  getHistories,
  getHistory,
  insertHistory,
  deleteHistory,
  getHistoryByParams,
} from '../controllers/history.controller'
import { logMiddleware } from '../middleware/log'
import { verifySession } from '../middleware/session'

const router = Router()

router.get('/:id', verifySession, getHistory)
router.get('/find/:id', verifySession, getHistoryByParams)
router.get('/', verifySession, getHistories)
router.post('/', insertHistory)
router.delete('/:id', deleteHistory)

export { router }
