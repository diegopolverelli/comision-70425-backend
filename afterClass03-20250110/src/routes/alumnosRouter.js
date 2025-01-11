import { Router } from 'express';
import { procesaErrores } from '../utils.js';
import { AlumnosManager } from '../dao/AlumnosManager.js';
import { CursosManager } from '../dao/CursosManager.js';
export const router=Router()

AlumnosManager.setPath("./src/data/alumnos.json")

router.get('/',async(req,res)=>{

    try {
        let alumnos=await AlumnosManager.getAlumnos()

        res.setHeader('Content-Type','application/json')
        res.status(200).json({alumnos})
    } catch (error) {
        procesaErrores(error, res)
    }

})

router.post("/", async(req, res)=>{
    let {nombre, email}=req.body
    if(!nombre || !email){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`nombre | email son requeridos!`})
    }

    // validaciones pertinentes...
    try {
        let alumnos=await AlumnosManager.getAlumnos()
        let existe=alumnos.find(a=>a.email==email)
        if(existe){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`El alumno con email ${email} ya existe en BD!`})
        }

        let nuevoAlumno=await AlumnosManager.createAlumno({nombre, email})
        res.setHeader('Content-Type','application/json');
        return res.status(201).json({message:`Alumno creado con éxito`, nuevoAlumno});
    } catch (error) {
        procesaErrores(error, res)
    }
})

router.post("/:aid/curso/:cid", async(req, res)=>{
    let {aid, cid}=req.params

    try {
        let cursos=await CursosManager.getCursos()
        let curso=cursos.find(c=>c.id==cid)
        let alumnos=await AlumnosManager.getAlumnos()
        let alumno=alumnos.find(a=>a.id==aid)
        if(!alumno || !curso){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Error con alumno o curso`})
        }
        let indiceCursando=alumno.cursando.findIndex(c=>c.id==cid)
        if(indiceCursando==-1){
            alumno.cursando.push({
                id:cid, 
                reinscripciones:1
            })
        }else{
            alumno.cursando[indiceCursando].reinscripciones++
        }

        await AlumnosManager.modificaAlumno(aid, alumno)

        res.setHeader('Content-Type','application/json');
        return res.status(200).json({payload:alumno, message:`Inscripción realizada!`});
    } catch (error) {
        procesaErrores(error, res)
    }
})