import mongoose from "mongoose";

export const alumnosModelo = mongoose.model(
    "alumnos",
    new mongoose.Schema(
        {
            nombre: String, 
            email: {type: String, unique: true}, 
            cursando:{
                type: [
                    {
                        curso: {
                            type: mongoose.Schema.Types.ObjectId, 
                            ref: "cursos"
                        }, 
                        reinscripciones: Number
                    }
                ]
            }
        },
        {
            timestamps: true
        }
    )
)