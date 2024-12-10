import {Router} from "express"
import { DemonManager } from "../dao/DemonManager.js";
import { procesaErrores } from "../utils.js";

export const router=Router()

DemonManager.setPath("./src/data/demonSlayer.json")

router.get("/", async(req, res)=>{

    // let nombre="Carlitos"
    try {
        let personajes=await DemonManager.getPersonajes()
    
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({personajes});
        
    } catch (error) {
        procesaErrores(res, error)
    }
})

router.get("/:id", async(req, res)=>{

    let {id} =req.params
    id=Number(id)
    if(isNaN(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete un id numérico`})
    }

    try {
        let personaje=await DemonManager.getPersonajeById(id)
        if(!personaje){
            res.setHeader('Content-Type','application/json');
            return res.status(404).json({error:`No existe personaje con id ${id}`})
        }

        res.setHeader('Content-Type','application/json');
        return res.status(200).json({personaje});
    } catch (error) {
        procesaErrores(res, error)
    }

})

router.post("/", async(req, res)=>{

    let {name, ...otros}=req.body   // ... son el op. rest aquí
    if(!name){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`name es requerido`})
    }

    // resto validaciones pertinentes...
    try {
        let existe=await DemonManager.getPersonajeByName(name)
        if(existe){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Ya existe ${name} en DB`})
        }

        let nuevoPersonaje=await DemonManager.createPersonaje({name, ...otros})   // ... son aquí op. spread
        
        res.setHeader('Content-Type','application/json');
        return res.status(201).json({payload:`Alta exitosa!`, nuevoPersonaje});
    } catch (error) {
        procesaErrores(res, error)
    }

})

router.put("/:id", async(req, res)=>{
    let {id} =req.params
    id=Number(id)
    if(isNaN(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete un id numérico`})
    }

    let aModificar=req.body
    if(aModificar.id){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`No está permitido modificar id`})
    }

    try {
        // validaciones pertinentes... según requerimientos / consignas
        if(aModificar.name){
            let personajes=await DemonManager.getPersonajes()
            let existe=personajes.find(p=>p.name.toLowerCase()===aModificar.name.trim().toLowerCase() && p.id!=id)
            if(existe){
                res.setHeader('Content-Type','application/json');
                return res.status(400).json({error:`Ya existe un personaje con name ${aModificar.name} en DB. Tiene id ${existe.id}`})
            }
        }

        let personajeModificado=await DemonManager.modificaPersonaje(id, aModificar)
        
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({payload:`Se modifico personaje con id ${id}`, personajeModificado});
    } catch (error) {
        procesaErrores(res, error)
    }

})

router.delete("/:id", (req, res)=>{

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:`delete a personaje ${req.params.id}`});
})