import fs from "fs"
export class DemonManager{
    static #path=""

    static setPath(rutaArchivo=""){
        this.#path=rutaArchivo
    }

    static async getPersonajes(){
        if(fs.existsSync(this.#path)){
            return JSON.parse(await fs.promises.readFile(this.#path, {encoding:"utf-8"}))
        }else{
            return []
        }
    }

    static async getPersonajeById(id){
        let personajes=await this.getPersonajes()
        let personaje=personajes.find(p=>p.id===id)
        return personaje
    }

    static async getPersonajeByName(name){
        let personajes=await this.getPersonajes()
        let personaje=personajes.find(p=>p.name.toLowerCase()===name.trim().toLowerCase())
        return personaje
    }

    static async createPersonaje(personaje={}){   // {name:"Batman", powers:["inteligencia"]}
        let personajes=await this.getPersonajes()
        let id=1
        if(personajes.length>0){
            id=Math.max(...personajes.map(d=>d.id))+1
        }
        let nuevoPersonaje={
            id, 
            ...personaje
        }
        personajes.push(nuevoPersonaje)

        await this.#grabaArchivo(JSON.stringify(personajes, null, 5))
        
        return nuevoPersonaje
    }

    static async modificaPersonaje(id, modificaciones={}){
        let personajes=await this.getPersonajes()
        let indicePersonaje=personajes.findIndex(p=>p.id===id)
        if(indicePersonaje===-1){
            throw new Error(`personaje inexistente con id ${id}`)
        }

        // let datos={
        //     nombre:"Juan",
        //     apellido:"Lopez", 
        //     nombre:"Romina" 
        // }

        personajes[indicePersonaje]={
            ...personajes[indicePersonaje],
            ...modificaciones,  
            id
        }

        await this.#grabaArchivo(JSON.stringify(personajes, null, 5))
        return personajes[indicePersonaje]
    }

    static async #grabaArchivo(datos=""){
        if(typeof datos!="string"){
            throw new Error(`error método grabaArchivo - argumento con formato inválido`)
        }
        await fs.promises.writeFile(this.#path, datos)
    }
}