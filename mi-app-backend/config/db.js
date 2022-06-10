const mongoose = require('mongoose')                // Importacion de la dependencia de Mongo
require('dotenv').config({path: 'config.env'})      // Importacion del archivo config.env

/* -------------------------------------------------Funcion asincrona para conectar a la BD */
const conectarBD = async() => {                     // Realizamos un try catch para conectar a la BD
    try {
        await mongoose.connect(process.env.DB_MONGO,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useFindAndModify: false
        })
        console.log('Base de Datos: CONECTADA !! --------')
    }
    catch(error) {
        console.log(error);
        process.exit(1)                             //Detenemos la aplicacion
    }
}

//Exportacion de la funcion para que sea visible en otros archivos
module.exports = conectarBD