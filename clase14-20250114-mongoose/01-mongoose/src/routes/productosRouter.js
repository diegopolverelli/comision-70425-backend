import { Router } from 'express';
import { ProductosManager } from '../dao/ProductosManager.js';
import { procesaErrores } from '../utils.js';
export const router=Router()

router.get('/',async(req,res)=>{

    try {
        let productos=await ProductosManager.getProducts()
    
        res.setHeader('Content-Type','application/json')
        res.status(200).json({productos})
        
    } catch (error) {
        procesaErrores(error, res)
    }
})

router.post("/", async(req, res)=>{

    let {code, title, ...otros}=req.body   // ... es el operador rest
    if(!code || !title){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`code y title son requeridos`})
    }

    // validaciones pertinentes

    try {
        let existe=await ProductosManager.getProductBy({code})
        if(existe){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Producto repetido con cod ${code}`})
        }

        let nuevoProducto=await ProductosManager.addProduct({code, title, ...otros})   // ... son el op. spread
        res.setHeader('Content-Type','application/json');
        return res.status(201).json({payload:"Producto creado!", nuevoProducto});
    } catch (error) {
        procesaErrores(error, res)
    }


})