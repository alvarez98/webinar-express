require('dotenv').config()
const express = require('express')
const app = express()
const { PORT } = process.env

const users = require("./routes/users")

app.use("/users", users)

// Hola Mundo
app.get('/', function (req, res) {
    res.send('hello world')
})

app.listen(PORT, () => {
    console.log(`Se ha iniciado el server en el puerto ${PORT}`)
})