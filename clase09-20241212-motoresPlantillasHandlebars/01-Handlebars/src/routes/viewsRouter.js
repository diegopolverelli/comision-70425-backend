import { Router } from 'express';
import { ProductsManager } from '../dao/ProductsManager.js';
export const router=Router()

router.get('/productos',async(req,res)=>{

    let productos=await ProductsManager.getProducts()
    let numero=Math.floor(Math.random()*(productos.length)+0)      // Math.floor(Math.random()*(cantNrosAGenerar)+aPartirDelNro)
    let producto=productos[numero]
    

    res.render("productos", {
        producto
    })
})