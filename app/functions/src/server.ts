require('dotenv').config()

import db from './db/config'
import { bgRed, bgGreen, bgYellow } from 'colors'
import app from './index'

db.authenticate()
  .then(() => {
    console.log(bgYellow('Database authenticate 🚀 '))
  })
  .catch((err: any) => console.log(err))

db.sync({ force: true })
  .then(() => {
    console.log(bgGreen('Database synced 🦕 '))
  })
  .catch((err: any) => console.log(err))

const SERVER_PORT = process.env.PORT || 8080

app.listen(SERVER_PORT, () => {
  console.log(bgRed(`🦊App running on port ${SERVER_PORT}🍔`))
})
