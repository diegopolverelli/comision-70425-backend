import { Router } from 'express';
import { VillanosDAOmongo as VillanosDAO } from '../dao/VillanosDAOmongo.js';
export const router=Router()
import fs from "fs"
import { isValidObjectId } from 'mongoose';

router.get("/seed", async(req, res)=>{
    try {
        let villanos=await VillanosDAO.get()
        if(villanos.length===0){
            let dataVillanos=JSON.parse(await fs.promises.readFile("./src/data/villanos.json", {encoding:"utf-8"}))
            let resultado=await VillanosDAO.insertMany(dataVillanos)
            res.setHeader('Content-Type','application/json');
            return res.status(201).json({payload:"Villanos inicializados!", resultado});
        }else{
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`La coleccion villanos contiene información. No se puede realizar el seed`})
        }
    } catch (error) {
        console.log(error);
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle:`${error.message}`
            }
        )        
    }
})

router.get('/',async(req,res)=>{

    try {
        let villanos=await VillanosDAO.get()
        res.setHeader('Content-Type','application/json')
        res.status(200).json({villanos})
    } catch (error) {
        console.log(error);
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle:`${error.message}`
            }
        )
    }

})


router.post("/", async(req, res)=>{
    let {name, alias, ...otros}=req.body
    if(!name){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete name`})
    }

    try {
        let villanos=await VillanosDAO.get()
        let existe=villanos.find(h=>h.name===name)
        if(existe){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Ya existe ${name} en la BD`})
        }        

        let nuevoVillano=await VillanosDAO.create({name, alias, ...otros})
        res.setHeader('Content-Type','application/json');
        return res.status(201).json({nuevoVillano});
    } catch (error) {
        console.log(error);
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle:`${error.message}`
            }
        )
    }
})

router.put("/:id", async(req, res)=>{
    let{id}=req.params
    // id=Number(id)
    // if(isNaN(id)){
    //     res.setHeader('Content-Type','application/json');
    //     return res.status(400).json({error:`Formato inválido id`})
    // }
    if(!isValidObjectId(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ingrese un id válido de mongodb`})
    }

    let {...aModificar}=req.body
    let cantPropsModificar=Object.keys(aModificar).length
    if(cantPropsModificar===0){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`No se han ingresado propiedades para modificar`})
    }

    try {
        let villanoModificado=await VillanosDAO.update(id, aModificar)  
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({villanoModificado});      
    } catch (error) {
        console.log(error);
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle:`${error.message}`
            }
        )
    }
})

router.delete("/:id", async(req, res)=>{
    let{id}=req.params
    id=Number(id)
    if(isNaN(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Formato inválido id`})
    }

    try {
        let villanoEliminado=await VillanosDAO.delete(id)  
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({villanoEliminado});      
    } catch (error) {
        console.log(error);
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle:`${error.message}`
            }
        )
    }
})