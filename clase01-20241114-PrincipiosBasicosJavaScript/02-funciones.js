
function suma(sumando1, sumando2){
    console.log("Resultado:", sumando1+sumando2)
}

suma(9, 3)
suma(10, 14)
suma(9, -3)
suma(20, 20)

// suma="cuando sumo 2 valores"


// suma(10, 10)

const suma1=function(a, b){
    console.log(a+b)
}

suma1(3, 3)
suma1(103, 3)


// const sumaFlecha=(a, b)=>{
//     console.log(a+b)
// }
const sumaFlecha=(a, b)=>console.log(a+b)


sumaFlecha(10, 10)


const cuadrado=a=>console.log(a*a)
cuadrado(9)

const resta=(a, b)=>{
    return a - b
}

let resultado=resta(10, 4)
console.log(resultado)

function multiplica(a, b){
    // codigo... 
    return a*b
}

console.log(multiplica(5, 4))

const restaFlecha=(a, b)=>a-b
console.log(restaFlecha(10, 7))

resultado=suma(7, 7)
console.log(resultado)

const saludar=()=>"hola...!!!"

console.log(saludar())

function saludar1(){

    // todo el código que necesitemos...

    

    return "Chau...!!!"
}

console.log(saludar1())