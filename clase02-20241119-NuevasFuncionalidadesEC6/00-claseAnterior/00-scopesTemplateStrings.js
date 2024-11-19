// let nombre
// if(true){
//     // let nombre="Juan"
//     nombre="Juan"
// }

// console.log(nombre)

const recuperaNombreDeBD=()=>{
    // proceso complejo...
    return "Juan"
}

let nombre
try {
    // let nombre=recuperaNombreDeBD()
    nombre=recuperaNombreDeBD()
    
} catch (error) {
    console.log(`Algo falló al recuperar nombre`)
}

console.log(nombre)

// template Strings

nombre="Mariela"
nombre='Juan'

let saludo="Hola, me llamo "+nombre+"...!!!"
saludo+="\n\nLista de super:\n\t1) azucar,\n\t2) café..."

let importe=9800
let titulo="Titulo web..."
saludo=`
<h1> ${titulo} </h1>
Hola, me llamo ${nombre}...!!!

Lista super:
    1) azucar...
    2) café...

Importe total a pagar $ ${importe}

`

console.log(saludo)