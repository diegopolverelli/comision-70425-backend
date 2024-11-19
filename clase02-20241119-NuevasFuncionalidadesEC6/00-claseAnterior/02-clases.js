
// let datosDeEntradaAlSistema=""

// class PersonaMayorDeEdad
class Persona{

    static especie="humano"
    static cantidadPersonasDefinidas=0
    static #datoClasePrivado="123"

    #password

    constructor(nombre, email, edad){
        this.nombre=nombre
        this.email=email
        this.edad=edad
        this.#password="CoderCoder123"
        // console.log("constructor ejecutado para "+nombre)
        Persona.cantidadPersonasDefinidas++
    }

    saludar(){
        // código... complejo...
        return `Hola, me llamo ${this.nombre}`
    }

    saludo2(saludo=""){
        return `${saludo} ${this.nombre}`
    }

    verPassword(){
        return this.#password
    }

    static verCantidadPersonasDefinidas(){
        return this.cantidadPersonasDefinidas
    }

    static verDato(){
        return this.#datoClasePrivado
    }


}

let persona01=new Persona("Rafael", "rafa@test.com", 24)
// Persona.cantidadPersonasDefinidas++
let persona02=new Persona("Maria", "maria@test.com", 25)
let persona03=new Persona("Laura", "laura@test.com", 34)
let persona04=new Persona("José Luis", "jluis@test.com", 18)
console.log(persona01)
console.log(persona02.email)
console.log(persona03.edad)
console.log(persona04.saludar())
console.log(persona02.saludo2("Buenas noches"))

// Persona.especie
console.log(Persona.especie)
// console.log(Persona.cantidadPersonasDefinidas)
console.log(Persona.verCantidadPersonasDefinidas())

// console.log(persona02.#password)
console.log(persona03.verPassword())
console.log(Persona.verDato())