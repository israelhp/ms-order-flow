require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const app = express()
const router = require('./routes/router')

const PORT = process.env.PORT || 3000

// Middleware
app.set('port', PORT)
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use(helmet())

// Definición de rutas
app.use('/api-gateway', router)

// Manejo de errores
app.use((err, _req, res, _next) => {
  console.error(err.stack)
  res.status(500).send('Something went wrong!')
})

module.exports = app
