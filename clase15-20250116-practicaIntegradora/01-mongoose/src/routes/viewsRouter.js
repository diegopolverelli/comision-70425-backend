import {Router} from "express"
import { ProductosManager } from "../dao/ProductosManager.js"
import { procesaErrores } from "../utils.js"

export const router=Router()

router.get("/products", async(req, res)=>{

    try {
        let productos=await ProductosManager.getProducts()
        // console.log(productos)
        if(productos.length>1)
        {
            console.log(productos[1])
            console.log(Object.keys(productos[1]))

        }
    
        res.status(200).render(
            "products",
            {
                productos
            }
        )
    } catch (error) {
        procesaErrores(error, res)
    }

})