import {Router} from "express"
import { ProductsManager } from "../dao/ProductsManager.js"
import { avisoMidd } from "../middlewares/aviso.js"

export const router=Router()

router.use(avisoMidd)

router.get("/", async(req, res)=>{
    let productos=await ProductsManager.getProducts()

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({productos});
})