// --------------------------------------------------- LLamado de conexion a la BD

// Conexion desde el archivo que contiene la funcion de conexion a la BD
const conectarBD = require('./config/db')

// Conexion a la BD
conectarBD()



// --------------------------------------------------- Creacion del servidor

// LLamada del servicio de Express
const express = require('express')  

// Implementacion del servicio
const app = express()

// Creacion del servidor en el puerto 4000 --- http:localhost:4000
app.listen(4000, () => {                        
    console.log('Servidor: ARRIBA y CORRIENDO !! --------')     
})

// Habilitacion de recepcion de json en la api
app.use(express.json())

// LLamado al modulo Cors
const cors = require('cors')
app.use(cors())


// --------------------------------------------------- Llamado al enrutado

/* 
Ruta eliminada cuando se definio la ruta desde routes/contacto.js
// Definicion de ruta principal
app.get('/', (req, res) => {
    res.send("Hola Mundo con Express")
}) 
*/

// Llamado a la ruta
app.use('/api/contacto', require('./routes/contacto'));
