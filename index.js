// const express = require('express')
import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3000

// agregar los middlewares necasarios
app.use(cors()) // permitir conexiones remotas
app.use(express.json()) // permite interpretar los datos que lleguen los datos que lleguen en la solicitud format json
// agregar el otro middleware morgan



console.log('Este backend ya esta escuchando 🌮')
console.log('Nuevo mensaje')

app.listen(PORT, ()=>{console.info(`Servidor activo en el puerto ${PORT}`)})