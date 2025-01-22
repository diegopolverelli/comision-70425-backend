import { Router } from 'express';
import { procesaErrores } from '../utils.js';
// import { AlumnosManager } from '../dao/AlumnosManager.js';
import {AlumnosMongoManager as AlumnosManager} from "../dao/AlumnosMongoManager.js"
// import { CursosManager } from '../dao/CursosManager.js';
import {CursosMongoManager as CursosManager} from "../dao/CursosMongoManager.js"
export const router=Router()

// AlumnosManager.setPath("./src/data/alumnos.json")

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
        console.log(cursos, cid)
        let curso=cursos.find(c=>c._id==cid)
        let alumnos=await AlumnosManager.getAlumnos()
        console.log(alumnos, aid)
        let alumno=alumnos.find(a=>a._id==aid)
        if(!alumno || !curso){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Error con alumno o curso`})
        }
        let indiceCursando=alumno.cursando.findIndex(c=>c.curso._id==cid)
        if(indiceCursando==-1){
            alumno.cursando.push({
                // id:cid, 
                curso: cid,
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

router.put("/:aid", async(req, res)=>{
    let {aid}=req.params
    let cursando=req.body

    try {
        let cursos=await CursosManager.getCursos()
        let alumnos=await AlumnosManager.getAlumnos()
        let alumno=alumnos.find(a=>a._id==aid)
        if(!alumno){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Error con alumno`})
        }

        if(!Array.isArray(cursando)){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Debe enviar un array válido de cursos por el body`})
        }

        let error=false
        let cursosBody=[]
        cursando.forEach(c=>{
            if(!c.id){
                console.log(`el objeto no tiene prop. id`)
                error=true
            }else{
                let existeCurso=cursos.find(curso=>curso._id==c.id)
                if(!existeCurso){
                    console.log(`no existe curso con id ${c.id}`)
                    error=true
                }else{
                    if(cursosBody.includes(c.id)){
                        error=true
                        console.log(`algun curso id está repetido en el body`)
                    }else{
                        cursosBody.push(c.id)
                    }
                }
            }
            if(!c.reinscripciones) c.reinscripciones=0

        })

        if(error){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Hay un error en alguno de los cursos...!!!`})
        }

        cursando=cursando.map(c=>{
            return {
                curso: c.id, 
                reinscripciones: c.reinscripciones
            }
        })

        alumno.cursando=cursando

        let alumnoModificado=await AlumnosManager.modificaAlumno(aid, alumno)
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({alumnoModificado});
        
    } catch (error) {
        procesaErrores(error, res)
    }
})