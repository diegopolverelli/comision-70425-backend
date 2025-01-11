import { Router } from 'express';
import { AlumnosManager } from '../dao/AlumnosManager.js';
import { procesaErrores } from '../utils.js';
import { CursosManager } from '../dao/CursosManager.js';
export const router=Router()

AlumnosManager.setPath("./src/data/alumnos.json")
CursosManager.setPath("./src/data/cursos.json")

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
        let alumno=alumnos.find(a=>a.id==req.params.aid)
        if(!alumno){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`No existen alumnos con id ${req.params.aid}`})
        }

        alumno.cursando.forEach(c=>{
            let descripCurso=cursos.find(curso=>curso.id==c.id)
            if(descripCurso){
                c.nombre=descripCurso.nombre
            }else{
                c.nombre="ERROR CON ESTE CURSO"
            }
        })
        
        res.render("alumno", {
            alumno, cursos
        })
    } catch (error) {
        procesaErrores(error, res)
    }

})