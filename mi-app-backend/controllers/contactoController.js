// Importacion del modelo
const Contacto = require('../models/Contacto')

// ------------------------------------------------------------------------------- Funcion para guardar un contacto en la BD
exports.crearContacto = async(req, res) => {
    /* console.log("Creando contacto desde el controlador...");
    console.log(req.body)
    */
    
    // Definimos la respuesta de la api dependiendo del estado recibido
    try {
        // Declaramos la variable principal
        let contacto
        
        // Instanciamos el modelo del componente para enviar la data
        contacto = new Contacto(req.body)

        // Indicamos que se guardara de manera asincrona
        await contacto.save() //Metodo de moongose que guarda la info en la BD

        // Enviamos como respuesta el nuevo documento creado
        res.send(contacto)
    } 
    catch (error) {
        console.log(error)

        //Error interno del servidor 
        // Si el error es tipo 500 se enviara este mensaje al usuario
        res.status(500).send("Mier.. hubo un error guardando el contacto !")
    }
}


// ------------------------------------------------------------------------------- Funcion para traer los contactos de la BD
exports.traerContactos = async(req, res) => {
    try {
        const contactos = await Contacto.find();
        res.json(contactos)
    }
    catch (error) {
        console.log(error)
        res.status(500).send("Mier.. hubo un error trayendo los contactos !")
    }
}


// ------------------------------------------------------------------------------- Funcion para actualizar la info.  del contacto de la BD
exports.actualizarContacto = async(req, res) => {
    try {
        const { nombre, email, telefono1, telefono2, ciudad, direccion, categoria } = req.body

        let contacto = await Contacto.findById(req.params.id)
        if (!contacto) {
            res.status(404).json({ msg: "No existe la información solicitada" })
        }

        contacto.nombre = nombre
        contacto.email = email
        contacto.telefono1 = telefono1
        contacto.telefono2 = telefono2
        contacto.ciudad = ciudad
        contacto.direccion = direccion
        contacto.categoria = categoria

        contacto = await Contacto.findOneAndUpdate({ _id: req.params.id }, contacto, { new: true })
        res.json(contacto)

    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}



// ------------------------------------------------------------------------------- Funcion para obtener el contacto de la BD por id
exports.obtenerContacto = async(req, res) => {
    try {
        let contacto = await Contacto.findById(req.params.id)
        if (!contacto) {
            res.status(404).json({ mensaje: "No existe la información solicitada" })
        }
        res.json(contacto)

    }
    catch(error){
        console.log(error)
        res.status(500).send("Mier.. hubo un error trayendo los contactos !")
    }
}

// ------------------------------------------------------------------------------- Funcion para borrar el contacto de la BD
exports.borrarContacto = async(req, res) => {
    try {
        const contacto = await Contacto.findById(req.params.id)
        if (!contacto) {
            res.status(404).json({ mensaje: "No existe la información solicitada" })
        }
        
        await Contacto.findByIdAndRemove({ _id: req.params.id })
        res.status(200).json({ mensaje: "Dato eliminado satisfactoriamente" })
    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}


