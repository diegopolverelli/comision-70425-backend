import mongoose from "mongoose"

export const heroesModelo=mongoose.model(
    "heroes", 
    new mongoose.Schema(
        {
            // id: {type: Number, unique: true},
            name: {type: String, unique: true},
            alias: String,
            team: String,
            publisher: String
        },
        {
            timestamps: true
        }
    )
)