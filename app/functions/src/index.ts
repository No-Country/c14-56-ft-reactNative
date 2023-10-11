import * as functions from 'firebase-functions'
import * as express from 'express'
import * as logger from 'firebase-functions/logger'
import * as cors from 'cors'

const app = express()
app.use(express.json())

app.use(cors())

// app.use('/api/v1/auth')

// Define una ruta para obtener datos de PostgreSQL
app.post('/api/v1/create', async (req, res) => {
  try {
    // Realiza operaciones de base de datos utilizando tu servidor Node.js aquí
    // Por ejemplo, puedes hacer una solicitud a tu servidor Node.js y obtener los datos
    // Asegúrate de que la respuesta se devuelva en formato JSON
    // Crear un usuario
  } catch (error) {
    logger.error('Error al obtener datos:', error)
    res.status(500).json({ error: 'Error al obtener datos' })
  }
})

export default app

// Configura Firebase Functions para usar la aplicación Express
export const api = functions.https.onRequest(app)

// RUTA : https://us-central1-team-linkup.cloudfunctions.net/api
