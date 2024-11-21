// let i=1
// console.log(`Operacion ${i}`)
// i++
// console.log(`Operacion ${i}`)
// i++
// let fechaFin=Date.now()+3000
// while(Date.now()<fechaFin){
//     // nada... espere...
// }
// console.log(`Operacion ${i}`)
// i++
// console.log(`Operacion ${i}`)
// i++


let operacion=1
let intervalo01=setInterval(() => {
    console.log(`Operacion ${operacion}`)
    operacion++
    if(operacion>6){
        clearInterval(intervalo01)
    }
}, 1000);

let operacion2=7
let intervalo02=setInterval(() => {
    console.log(`Operacion ${operacion2}`)
    operacion2++
    if(operacion2>12){
        clearInterval(intervalo02)
    }
}, 500);

setTimeout(() => {
    console.log(`Revisar correo...`)
}, 3000);







