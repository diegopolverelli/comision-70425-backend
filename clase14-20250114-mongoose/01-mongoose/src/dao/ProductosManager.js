import { productsModel } from "./models/productsModel.js";

export class ProductosManager{
    static async getProducts(){
        return await productsModel.find()
    }
    static async getProductBy(filtro={}){   // filtro= {_id:"67866cce0951195585cacaeb"}   o   {descrip:"Martillo", price:100}
        return await productsModel.findOne(filtro)
    }
    static async addProduct(producto){
        return await productsModel.create(producto)
    }
    static async updateProduct(id, producto){
        // return await productsModel.updateOne({_id:id}, producto)
        return await productsModel.findByIdAndUpdate(id, producto, {new:true})
    }
    static async deleteProduct(id){
        // return await productsModel.deleteOne({_id:id})
        return await productsModel.findByIdAndDelete(id)
    }

}