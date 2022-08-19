require('dotenv').config()
const mongoose = require("mongoose")
const express = require("express")

const app = express()

// AWS -> keys privadas, keys accesos

// Destructuracion
// Variables de entorno
const {
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME
}  = process.env

// URL
const URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}${DB_NAME}`

// Conectando a la base de datos
mongoose.connect(URL)
.then(() => {
  console.log("Conectado a la base de datos de mongo")

  // Levantando el servidor
  app.listen(8080, () => {
    console.log("Server listening...")
  })
})
.catch((error) => {
  console.log("errore", error)
})