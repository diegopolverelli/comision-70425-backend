import mongoose from "mongoose"

try {
    await mongoose.connect(
        "mongodb+srv://backend70425:CoderCoder123@cluster0.3dgtw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        {
            dbName: "clase16"
        }
    )
    console.log(`DB online`)
} catch (error) {
    console.log(`Error al conectar a DB`)
}

const alumnoModelo=mongoose.model(
    "alumnos", 
    new mongoose.Schema(
        {
            nombre: String, 
            email: {type: String, unique: true},
            cursando: {
                type: [
                    {
                        curso: {
                            type: mongoose.Schema.Types.ObjectId,
                            ref: "cursos"
                        },
                        notaPromedio: Number
                    }
                ]
            },
            cursadas: {
                type: [
                    {
                        curso: {
                            type: mongoose.Schema.Types.ObjectId,
                            ref: "cursos"
                        },
                        notaPromedio: Number
                    }
                ]
            },
            edad: Number
        },
        {
            timestamps: true
        }
    )
)

const cursoModelo=mongoose.model(
    "cursos",
    new mongoose.Schema({
        nombre: String, 
        horas: Number, 
        docente: String
    })
)

// generar datos
// await cursoModelo.deleteMany({})
// let curso01=await cursoModelo.create({nombre:"Cálculo II", horas:18, docente: "Laura Quiroz"})
// let curso02=await cursoModelo.create({nombre:"Probabilidad y estadística", horas:26, docente: "Federico Lopez"})
// let curso03=await cursoModelo.create({nombre:"Programación II", horas:14, docente: "Rafael Paez"})

// await alumnoModelo.deleteMany({})
// let alumno01=await alumnoModelo.create(
//     {
//         nombre: "Carolina Fernandez", 
//         edad: 25, 
//         email: "cfernandez2022@test.com", 
//         cursando: [
//             {
//                 curso: curso01._id,
//                 notaPromedio: 6
//             },
//             {
//                 curso: curso02._id, 
//                 notaPromedio: 8
//             }
//         ],
//         cursadas: [
//             {
//                 curso: curso03._id, 
//                 notaPromedio: 7
//             }
//         ]
//     }
// )

console.log(JSON.stringify(await alumnoModelo.find(), null, 5))
console.log(JSON.stringify(await alumnoModelo.find().populate("cursando.curso").populate("cursadas.curso").lean(), null, 5))

let alumnoDatos=await alumnoModelo.find()
                            .populate({
                                path: "cursando.curso",
                                // populate: {
                                //     path: "docente",
                                //     populate: {
                                //         path: "codigoPostal"
                                //     }
                                // }
                            })
                            .populate({
                                path: "cursadas.curso"
                            })
                            .lean()


console.log(JSON.stringify(alumnoDatos, null, 5))