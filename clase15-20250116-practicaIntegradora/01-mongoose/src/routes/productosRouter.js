import { Router } from 'express';
import { ProductosManager } from '../dao/ProductosManager.js';
import { procesaErrores } from '../utils.js';
import { isValidObjectId } from 'mongoose';
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

router.put("/:id", async(req, res)=>{
    let {id}=req.params
    if(!isValidObjectId(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ingrese un id de mongodb válido`})
    }

    let aModificar=req.body

    // validaciones pertinentes... ej: que no llegue _id, price sea number, que si modifican code ese code no exista ya en DB
    try {
        let productoModificado=await ProductosManager.updateProduct(id, aModificar)
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({payload:"Producto modificado con éxito", productoModificado});
    } catch (error) {
        procesaErrores(error, res)
    }
})

router.delete("/:id", async(req, res)=>{
    let {id}=req.params
    if(!isValidObjectId(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ingrese un id de mongodb válido`})
    }


    // validaciones pertinentes... ej: que el producto no existe en un carrito, o utilizar delete lógico
    try {
        let productoEliminado=await ProductosManager.deleteProduct(id)
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({payload:"Producto eliminado con éxito", productoEliminado});
    } catch (error) {
        procesaErrores(error, res)
    }
})