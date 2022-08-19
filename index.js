const mongoose = require("mongoose")
const express = require("express")

const app = express()

const URL = "mongodb+srv://ale:kodemia123@kodemia.bmut7hx.mongodb.net/kodemia"

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