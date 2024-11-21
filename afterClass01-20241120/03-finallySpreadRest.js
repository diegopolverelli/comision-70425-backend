// operador Spread:
let defensa={
    primerCentral:'Romero',
    lateralIzquierdo:'Montiel',
    lateralDerecho:'Tagliafico',
    segundoCentral:'Otamendi'
}

let medio={
    nro5:'Paredes',
    nro8:'DePaul',
    nro7:'DiMaria',
    nro14:'Enzo'
}

let ataque={
    el10:'Lio',
    el9:'Julian',
}

const equipo={
    arquero:"Martinez",
    // lateralDerecho:defensa.lateralDerecho,
    // lateralIzquierdo:defensa.lateralIzquierdo,
    // el10:ataque.el10
    ...defensa, 
    // delantero:ataque.el9,
    ...medio, 
    ...ataque, 
    lateralDerecho: "Acuña",
    // lateralDerecho: "Soñora",
    // lateralDerecho: "Ibarra",


}

console.log(equipo)



let numeros=[1,2,3,4]
let numeros2=[5,6,7,8]
let todosLosNumeros=[...numeros, ...numeros2]
console.log(todosLosNumeros)



const suma=(a, b, c, d)=>{
    return a+b+c+d
}
console.log(suma(10, 10, 10, 10))
console.log(suma(...numeros))





// operador Rest: ...
// const suma2=(a, b, ...otrosArgumentos)=>{
const suma2=(...sumandos)=>{
    // console.log(a, b, otrosArgumentos)
    return sumandos.reduce((acum, valor)=>acum+=valor, 0)
}

console.log("9+9+10", suma2(9, 9, 10))
console.log("9+9",suma2(9, 9))
// console.log(suma2(9, 9, 100, "Juan", {name:"Pablo"}))
console.log("no envio args",suma2())



// desestructuracion:
// desestructuracion de Objetos:
// let arquero=equipo.arquero
// let defensor01=equipo.lateralDerecho
// let medio01=equipo.nro5
// console.log(arquero, defensor01, medio01)

let {arquero, lateralDerecho, lateralIzquierdo, nro8="Pepe Basualdo", primerCentral, nro23, nro24="Juan"}=equipo
console.log(arquero, lateralDerecho, lateralIzquierdo, nro8, primerCentral, nro23, nro24)

let body={
    nombre:"Juan", password:"CoderCoder123", email:"juan@test.com"
}
let {nombre, email}=body   // desestructuración
if(!email){
    console.log(`Complete el email...!!!`)
}

let {arquero:arqueroSuplente, el10}=equipo
console.log(arqueroSuplente)

// let nombre1
// let nombre1

const utilidades=()=>{
    let pi=3.14
    let numerosPrimos=[2,3,5,7,11,13,17,19,23]
    function suma(a,b){
        console.log(a+b)
    }
    return {
        pi,
        numerosPrimos,
        suma,
        abc:90000
    }
}

let {numerosPrimos:misNumerosPrimos, pi}=utilidades()
console.log(pi, misNumerosPrimos)

const retornaUsuarioDB=()=>{
    return {
        name:"Juan", email:"juan@test.com", age:32
    }
}

let {name, email:correoElectronico}=retornaUsuarioDB()
console.log(name, correoElectronico)


// desestructuracion de Arrays:
let heroes=["Superman", "Hulk", "Black-Widow", "Mujer Maravilla", "Batman"]



const useContador=()=>{
    let contador={valor:0}
    const setContador=(valor)=>{
        contador.valor=valor
    }
    return [contador, setContador]
}

