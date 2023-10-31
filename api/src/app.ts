import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import { router } from './routes'
import dbConnect from './config/mongo'
import fileUpload from 'express-fileupload'

const app = express()
const port = process.env.PORT || 3002

// Middlewares
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
    createParentPath: true,
  })
)

app.use(router)

// DB Connection
dbConnect().then(() => console.log('DB Connection is ready'))

app.listen(port, () => {
  console.log('Listen on the port:', port)
})
