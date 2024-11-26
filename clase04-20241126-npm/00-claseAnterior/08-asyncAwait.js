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


async function calculo2(){

}

// 5x4 + 3x3
const calculo=async()=>{
    try {
        let res1=await multiplica(5, 4)
        // let res2=await multiplica(3, "3")
        let res2=await multiplica(3, 3)
        let resFinal=await suma(res1, res2)
    
        // console.log(`Resultado=${resFinal}`)
        return resFinal
        
    } catch (error) {
        console.log(`Error...!!!`)
    }
    
}

// console.log(calculo())
calculo()
    .then(r=>console.log(r))
    .catch(e=>console.log(e.message))


const consultaAPI=async(url="")=>{
    let rta=await fetch(url)
    return await rta.json()

}

const listarUsuarios=async()=>{
    // let usuarios=await consultaAPI("https://reqres.in/api/users?page=1&per_page=6")
    // console.log(usuarios.data)
    let {data}=await consultaAPI("https://reqres.in/api/users?page=1&per_page=6")
    console.log(data)
}

listarUsuarios()