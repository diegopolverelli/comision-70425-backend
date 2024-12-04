const Persona=require("./Persona.js")
const utilidades=require("./varios.js")
const {saludos, f1:suma, f2:resta} =require("./varios.js")
const HeroClass=require("./varios.js").Heroe

const fs=require("fs")
const {writeFileSync:grabaSincrono, existsSync} =require("fs")
const leerArchivo=require("fs").readFileSync

const fsPromesas=require("fs").promises
const {join} = require("path")


let persona01=new Persona("Pedro", "Barrios")
console.log(persona01.saludo())

console.log(utilidades.usuarios)
utilidades.saludos.saludoFormal()
let heroe01=new utilidades.Heroe("Hulk", "Bruce Banner")
console.log(heroe01.verIdentidad())

console.log(suma(5,5))
console.log(resta(15,4))

let heroe02=new HeroClass("Batman", "Bruce Wayne")
console.log(heroe02.verIdentidad())

// let rutaArchivo=__dirname+"/archivos/texto01.txt"
let rutaArchivo=join(__dirname, "archivos", "texto01.txt")
console.log({rutaArchivo})

// grabaSincrono("./archivos/texto01.txt", "Hola...!!!")
// let data=leerArchivo("./archivos/texto01.txt", {encoding:"utf-8"})
// console.log(data)

// fsPromesas.writeFile("./archivos/texto02.txt", "Hola...!!!")
grabaSincrono(rutaArchivo, "Hola...!!!")
let data=leerArchivo(rutaArchivo, {encoding:"utf-8"})
console.log(data)


console.log(__dirname)
console.log(__filename)