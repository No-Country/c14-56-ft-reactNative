import { Response } from 'express'

const handleHttp = (res: Response, error: string, errorRaw?: unknown) => {
  res.status(500)
  res.send({
    msg: error,
    error: errorRaw,
  })
}

export { handleHttp }
