import mongoose from 'mongoose';
import { mongourl } from './utils.js';


const entorno=async()=>{
    try {
        await mongoose.connect(mongourl)
        console.log(`Conexión a DB establecida`)

        const usuariosEsquema = new mongoose.Schema(
            {
                // first_name: String, 
                first_name: {
                    type: String, 
                    index: true
                }, 
                last_name: String,
                email: 
                String, 
                gender: 
                String, 
                code: Number
            }, 
            { 
                collection: 'bigUsers' 
            }
        )
        
        const usuariosModelo = mongoose.model('usuarios', usuariosEsquema)
          
        // let resultado=await usuariosModelo.find()
        // let resultado=await usuariosModelo.find().explain("executionStats")
        // console.log(JSON.stringify(resultado.executionStats, null, 5))

        // let resultado=await usuariosModelo.find({first_name:"Bill"}).explain("executionStats")
        // console.log(JSON.stringify(resultado.executionStats, null, 5))

        // let resultado=await usuariosModelo.findOne({first_name:"Bill"}).explain("executionStats")
        // console.log(JSON.stringify(resultado.executionStats, null, 5))

        let resultado=await usuariosModelo.findOne({first_name:"Marcellina"}).explain("executionStats")
        console.log(JSON.stringify(resultado.executionStats, null, 5))


        process.exit()
        
    } catch (error) {
        console.log(error.message)
    }
}

entorno()