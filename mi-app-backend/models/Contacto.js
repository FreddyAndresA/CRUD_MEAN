// Llamado a la libreria Mongoose
const mongoose = require('mongoose')

const ContactSchema = mongoose.Schema ({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefono1: {
        type: String,
        required: true
    },
    telefono2: {
        type: String
    },
    ciudad: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    categoria: {
        type: String
    },
    fecha_creacion: {
        type: Date,
        default: Date.now()
    }
},{
    versionKey: false,
})


// Exportacion del modelo que permitira enviar data a la BD
module.exports = mongoose.model("Contacto", ContactSchema)