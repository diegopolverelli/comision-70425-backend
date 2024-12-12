import { Router } from 'express';
import { ProductsManager } from '../dao/ProductsManager.js';
export const router=Router()

router.get('/',async(req,res)=>{

    let productos=await ProductsManager.getProducts()

    res.setHeader('Content-Type','application/json')
    res.status(200).json({productos})
})