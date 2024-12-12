import { productos } from "../data/productos.js";

export class ProductsManager{
    static async getProducts(){
        return productos
    }

}