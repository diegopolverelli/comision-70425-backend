import { Router } from 'express';
import { CursosManager } from '../dao/CursosManager.js';
import { procesaErrores } from '../utils.js';
export const router=Router()

CursosManager.setPath("./src/data/cursos.json")

router.get('/',async(req,res)=>{

    try {
        let cursos=await CursosManager.getCursos()
        res.setHeader('Content-Type','application/json')
        res.status(200).json({cursos})
    } catch (error) {
        procesaErrores(error, res)
    }

})

router.post("/", async(req, res)=>{

    let {nombre, horas, docente} = req.body
    if(!nombre){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`nombre es requerido!`})
    }

    try {
        let nuevoCurso=await CursosManager.createCurso({nombre, horas, docente})
        res.setHeader('Content-Type','application/json');
        return res.status(201).json({message:"Curso creado!", nuevoCurso});
    } catch (error) {
        procesaErrores(error, res)
    }
})