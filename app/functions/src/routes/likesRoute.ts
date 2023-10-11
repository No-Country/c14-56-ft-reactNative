import * as express from 'express'

const router = express.Router()

import likeController from '../controllers/likesController'

router.route('/create').post(likeController.create)

export default router
