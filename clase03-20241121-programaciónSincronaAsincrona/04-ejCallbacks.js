// let nombre="Pedro"
// console.log(nombre)

// fetch()

const operacion=(a, b, cb)=>{   // cb(error)
    if(typeof a!="number" || typeof b!="number"){
        cb(new Error("Solo se adminten argumentos numéricos"))
        return 
    }
    console.log(cb(null, a, b))
}

operacion(5, 4, (error, n1, n2)=>n1+n2)
operacion(5, 4, (error, n1, n2)=>n1-n2)
operacion(5, 4, (error, n1, n2)=>n1*n2)
operacion(5, 4, (error, n1, n2)=>n1/n2)

operacion(5, 4, (error, n1, n2)=>{
    if(error){
        console.log(`Error...!!! ${error.message}`)
        return
    }

    return n1+n2
})

operacion(5, "Mariela", (error, n1, n2)=>{
    if(error){
        console.log(`Error...!!! ${error.message}`)
        return
    }

    return n1+n2
})