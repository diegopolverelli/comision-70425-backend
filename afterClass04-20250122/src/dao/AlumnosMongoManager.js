// import fs from "fs"

import { alumnosModelo } from "./models/alumnosModelo.js"

export class AlumnosMongoManager{
    // static #path=""

    // static setPath(ruta){
    //     this.#path=ruta
    // }

    static async getAlumnos(){
        // if(fs.existsSync(this.#path)){
        //     return JSON.parse(await fs.promises.readFile(this.#path, {encoding:"utf-8"}))
        // }else{
        //     console.log("sale x acá")
        //     return []
        // }
        // return await alumnosModelo.find().lean()
        return await alumnosModelo.find().populate("cursando.curso").lean()
    }

    static async createAlumno(alumno={}){
        // let alumnos = await this.getAlumnos()
        // let id=1
        // if(alumnos.length>0){
        //     id=Math.max(...alumnos.map(d=>d.id))+1
        // }

        // let nuevoAlumno={
        //     id, 
        //     ...alumno,
        //     cursando:[]
        // }

        // alumnos.push(nuevoAlumno)

        // await fs.promises.writeFile(this.#path, JSON.stringify(alumnos, null, 5))

        let nuevoAlumno=await alumnosModelo.create({
            ...alumno, cursando:[]
        })
        return nuevoAlumno.toJSON()
        
    }

    static async modificaAlumno(id, aModificar={}){
        // let alumnos=await this.getAlumnos()
        // let indiceAlumno=alumnos.findIndex(a=>a.id==id)
        // if(indiceAlumno==-1){
        //     throw new Error(`No existen alumnos con id ${id}`)
        // }

        // alumnos[indiceAlumno]={
        //     ...alumnos[indiceAlumno],
        //     ...aModificar,
        //     id
        // }

        // let persona={
        //     nombre:"Juan", 
        //     nombre:"Carlos", 
        //     nombre: "Maria"
        // }

        // await fs.promises.writeFile(this.#path, JSON.stringify(alumnos, null, 5))
        // return alumnos[indiceAlumno]

        return await alumnosModelo.findByIdAndUpdate(id, aModificar, {new: true})

    }
}