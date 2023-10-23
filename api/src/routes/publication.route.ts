import { Router } from 'express'

import {
  deletePublication,
  getOnePublication,
  getOwnPublications,
  getPublications,
  insertPublication,
  updatePublication,
} from '../controllers/publication.controller'
import { logMiddleware } from '../middleware/log'
import { verifySession } from '../middleware/session'

const router = Router()

router.get('/all/:id', getPublications)
router.get('/own/:id', getOwnPublications)
router.get('/:id', getOnePublication)
router.post('/', insertPublication)
router.put('/:id', updatePublication)
router.delete('/:id', deletePublication)

export { router }
