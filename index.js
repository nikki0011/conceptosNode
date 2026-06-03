// const express = require('express')
import express from 'express'

const app = express()
const PORT = 3000

console.log('Este backend ya escuch 🌮')

app.listen(PORT, ()=>{console.info(`Servidor activo en el puerto ${PORT}`)})