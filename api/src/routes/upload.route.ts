import { Router } from 'express'
import { deleteImage, updatedImage } from '../controllers/upload.controller'

const router = Router()

router.put('/:collection/:id', updatedImage)
router.post('/:collection/:id', updatedImage)
router.delete('/:public_id', deleteImage)

export { router }
