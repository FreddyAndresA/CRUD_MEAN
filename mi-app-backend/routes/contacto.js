// Rutas para Contacto

// Importacion del servicio de Express
const express = require('express')

// Llamado para controlar las rutas junto con Express
const router = express.Router()

// Llamado al controlador
const contactoController = require('../controllers/contactoController')     

//api/contactos
/* 
Ruta eliminada desde que se creo la ruta por el controlador
router.post('/', ()=> {
    console.log("Creando contacto...")      // Será la primera respuesta que se reciba al testear con Postman
}) 
*/

//Configuracion de las ruta usando el controlador

//Ruta para crear contactos /api/contacto - Metodo POST
router.post('/', contactoController.crearContacto)

//Ruta para actualizar contacto /api/contacto:id  - Metodo PUT
router.put('/:id', contactoController.actualizarContacto)

//Ruta para listar todos los contactos api/contacto - Metodo GET
router.get('/', contactoController.traerContactos)

//Ruta para obtener un contacto /api/contacto:id - Metodo GET
router.get('/:id', contactoController.obtenerContacto)

//Ruta para borrar un contacto /api/contacto:id - Metodo DELETE
router.delete('/:id', contactoController.borrarContacto)



// Exportacion del modulo de rutas
module.exports = router