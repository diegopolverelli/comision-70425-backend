const suma=(a, b)=>{
    return new Promise((res, rej)=>{   // resolve | reject
        if(typeof a!="number" || typeof b!="number"){
            rej(new Error("Solo se admiten args. numéricos"))
        }

        res(a+b)
        // res("JUan")
    })
}

const multiplica=(a, b)=>{
    return new Promise((res, rej)=>{   // resolve | reject
        if(typeof a!="number" || typeof b!="number"){
            rej(new Error("Solo se admiten args. numéricos"))
        }

        res(a*b)
        // res("JUan")
    })
}

// fetch()

// 5 x 4
suma(5, 5)
    .then(res1=>{
        suma(res1, 5)
            .then(res2=>{
                suma(res2, 5)
                    .then(resFinal=>{
                        console.log(`5 x 4 = ${resFinal} (promise Hell...)`)
                    })
            })
    })

// 5 x 4
suma(5, 5)
    .then(res1=>{
        return suma(res1, 5)
    })
    .then(res2=>{
        return suma(res2, 5)
    })
    .then(resFinal=>{
        // console.log(lalala)
        console.log(`5 x 5 (encadenamiento promesas): ${resFinal}`)
    })
    .catch(e=>{
        console.error(e.message)
    })


// 5 x 4
suma(5, 5)
    .then(res1=>{
        return `resultado de 5 + 5 es ${res1}`
    })
    .then(res2=>{
        return res2.toUpperCase()
    })
    .then(resFinal=>{
        // console.log(lalala)
        console.log(`Prueba (encadenamiento promesas): ${resFinal}`)
    })
    .catch(e=>{
        console.error(e.message)
    })

// 5x4 + 3x3
let auxiliar01=0
multiplica(5, 4)
    .then(res1=>{
        auxiliar01=res1
        return multiplica(3, 3)
    })
    .then(res2=>{
        // return suma(res1, res2)
        return suma(auxiliar01, res2)
    })
    .then(resFinal=>{
        console.log(`Resultado calculo: ${resFinal}`)
    })
    // .catch(e=>{
    //     console.log(e.message)
    // })
