import { NextFunction, Request, Response } from 'express'

import { JWT } from '../utils/jwt.handle'
import { RequestExt } from '../interface/session.interface'

const verifySession = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwt = new JWT()
    const bearer = req.headers.authorization
    console.log(bearer)

    const reqJWT = bearer?.split(' ').pop()

    const isValid = jwt.verifyToken(`${reqJWT}`)
    if (!isValid) {
      res.status(401)
      res.send('NO_TIENES_UN_JWT_VALIDO')
    } else {
      req.user = isValid
      next()
    }
  } catch (e) {
    console.log({ e })
    res.status(400)
    res.send('SESSION_NO_VALIDAD')
  }
}

export { verifySession }
