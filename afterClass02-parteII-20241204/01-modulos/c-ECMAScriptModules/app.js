import Persona from "./Persona.js"
import * as utilidades from "./varios.js" 
import {Heroe, f1 as suma} from "./varios.js"
import Villano from "./varios.js"

import ClassVillano, {f2 as resta, Heroe as ClassHeroe} from "./varios.js" 

import fs from "fs"
import {writeFileSync as grabaSincrono} from "fs"
import {promises as fsPromesas} from "fs"
import {join} from "path"

import __dirname from "./utils.js"

// fs.writeFileSync("./archivos/texto01.txt", "Hola...!!! de nuevo...")
// grabaSincrono("./archivos/texto02.txt", "Chau...!!!")
// fsPromesas.readFile("./archivos/texto01.txt", {encoding:"utf-8"})
//             .then(res=>console.log("datos del archivo:", res))
//             .catch(e=>console.log(e.message))




let persona01=new Persona("Jimena", "Lopez")
console.log(persona01.saludo())


console.log(utilidades.usuarios)
utilidades.saludos.despedida()

console.log(suma(10,21))

let heroe01=new Heroe("Robin", "Dick Grayson")
console.log(heroe01.verIdentidad())

let villano01=new utilidades.default("Thanos", "no tiene alias")
console.log(villano01.verIdentidad())

let villano02=new Villano("Joker", "John Keyser")
console.log(villano02.verIdentidad())

let villano03=new ClassVillano("Ronan", "-")
console.log(villano03.verIdentidad())

console.log(resta(100,24))

let heroe02=new ClassHeroe("Superman", "Clark Kent")
console.log(heroe02.verIdentidad())


console.log(utilidades.sumar(20, 20))

// console.log(__dirname)
console.log(import.meta.dirname)
console.log(import.meta.filename)

let rutaAbsolutaArchivo=join(import.meta.dirname, "archivos", "texto03.txt")
console.log({rutaAbsolutaArchivo})

fs.writeFileSync(rutaAbsolutaArchivo, "Hola...!!! de nuevo...")

console.log({__dirname})

console.log("hola")

let usuarios2=[
    {id:1, nombre:"Luciana", email:"luciana@test.com", password:"123", rol:"user"},
    {id:2, nombre:"Juan", email:"juan@test.com", password:"123", rol:"user"},
    {id:3, nombre:"Romina", email:"romina@test.com", password:"123", rol:"admin"},
]

console.log(usuarios2)

// @media(min-width: px) {}

// res.setHeader('Content-Type','application/json');
// return res.status(200).json({payload:"datos listados...!!!"});


let id=1
if(usuarios2.length>0){
    id=Math.max(...usuarios2.map(d=>d.id))+1
}
console.log(id)

// console.log('');
// console.log('');

