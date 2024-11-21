let numeros=[1,2,3,4,5]
let resultado=numeros.map(n=>n**2)
console.log("map normal:", resultado)

const miMap=(datoArray=[], fnCallback)=>{
    let resultado=[]
    for(let i=0; i<datoArray.length; i++){
        let resultadoFnCb=fnCallback(datoArray[i])
        resultado.push(resultadoFnCb)
    }
    return resultado
}

resultado=miMap(numeros, n=>n**2)
console.log("nuestro map personalizado:", resultado)



// let nombre="Jua889n"
let nombre="Juan"

let regExNombre=/[0-9]/i
// console.log(regExNombre.test(nombre))
if(regExNombre.test(nombre)){
    console.log("Nombre no puede contener dígitos...")
    return 
}

console.log("Nombre OK...!!!")

