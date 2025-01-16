import mongoose from "mongoose"

const productosCollection="productos"  // le da nombre al model y a la colección

const productosSchema=new mongoose.Schema(
    {
        code: {
            type: String, 
            unique: true
        },
        title: String, 
        descrip: String,
        price: Number, 
        status: {type:Boolean, default: true}, 
        stock: Number, 
        images: {
            type: Array, 
            default: []
        }
    },
    {
        // collection: "productos2021",
        timestamps: true, 
        // strict: false
    }
)

export const productsModel=mongoose.model(
    productosCollection,
    productosSchema
)

// productsModel.findOne({code:"ABC123"})
// productsModel.findOne({_id:"67866cce0951195585cacaeb"})
// productsModel.findById("67866cce0951195585cacaeb")