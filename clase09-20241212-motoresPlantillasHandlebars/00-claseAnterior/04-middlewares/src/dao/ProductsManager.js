import { productos } from "../data/product.js";

export class ProductsManager{
    static async getProducts(){
        return productos
    }
}