import { Router } from 'express';
// import { AlumnosManager } from '../dao/AlumnosManager.js';
import {AlumnosMongoManager as AlumnosManager} from "../dao/AlumnosMongoManager.js"
import { procesaErrores } from '../utils.js';
// import { CursosManager } from '../dao/CursosManager.js';
import {CursosMongoManager as CursosManager } from "../dao/CursosMongoManager.js"
export const router=Router()

// AlumnosManager.setPath("./src/data/alumnos.json")
// CursosManager.setPath("./src/data/cursos.json")

router.get('/alumnos',async(req,res)=>{

    try {
        let alumnos=await AlumnosManager.getAlumnos()
    
        res.render("alumnos", {
            alumnos
        })
        
    } catch (error) {
        procesaErrores(error, res)
    }
})

router.get("/alumno/:aid", async(req, res)=>{

    try {
        let cursos=await CursosManager.getCursos()
        let alumnos=await AlumnosManager.getAlumnos()
        let alumno=alumnos.find(a=>a._id==req.params.aid)
        if(!alumno){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`No existen alumnos con id ${req.params.aid}`})
        }

        // console.log(alumno.cursando)
        // console.log(cursos)
        // alumno.cursando.forEach(c=>{
        //     console.log(c.curso)
        //     let descripCurso=cursos.find(curso=>curso._id.toString()==c.curso.toString())
        //     if(descripCurso){
        //         c.nombre=descripCurso.nombre
        //     }else{
        //         c.nombre="ERROR CON ESTE CURSO"
        //     }
        // })
        
        res.render("alumno", {
            alumno, cursos
        })
    } catch (error) {
        procesaErrores(error, res)
    }

})