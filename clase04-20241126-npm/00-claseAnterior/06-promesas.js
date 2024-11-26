const suma=(a, b)=>{
    return new Promise((res, rej)=>{   // resolve | reject
        if(typeof a!="number" || typeof b!="number"){
            rej(new Error("Solo se admiten args. numéricos"))
        }

        res(a+b)
        // res("JUan")
    })
}

console.log(suma(5, 4))
console.log(suma(5, 4)*5)

suma(10, 2)
    .then(resultado=>{
        console.log(resultado)
    })
    .catch(error=>{
        console.log(`Error: ${error.message?error.message:error}`)
    })
    .finally(()=>{
        console.log("esto ejecuta siempre...")
    })

suma(10, "Juan Carlos")
    .then(resultado=>{
        console.log(resultado)
    })
    .catch(error=>{
        console.log(`Error: ${error.message?error.message:error}`)
    })
    .finally(()=>{
        console.log("esto ejecuta siempre...")
    })
    
console.log("Fin de programa")