const fs = require("fs")

let rutaArchivo = "./archivos/archivoPromesas.txt"
let texto3 = `
“Debe trabajar el hombre
Para ganarse su pan;
Pues la miseria, en su afán
De perseguir de mil modos,
Llama a la puerta de todos
Y entra en la del haragán”.

“Muchas cosas pierde el hombre
Que a veces la vuelve a hallar;
Pero los debo enseñar,
Y es güeno que lo recuerden:
Si la vergüenza se pierde,
Jamás se la vuelve a encontrar”.

José Hernandez - fragmento del Martin Fierro`

// throw new Error("error de pruebas...!!!")

// fs.promises.writeFile(rutaArchivo, texto3)
//     .then(() => {
//         console.log(`Archivo generado!`)
//         fs.promises.readFile("./archivos/archivoPromesas.txt", { encoding: "utf-8" })
//             .then(info => {
//                 console.log(info)
//                 fs.promises.appendFile(rutaArchivo, "\n\nEditorial Planeta")
//                     .then(()=>{
//                         console.log(`Editorial añadida`)
//                         // iría unlink...
//                     })
//                     .catch(e=>console.log(e.message))
//             })
//             .catch(e => console.log(e.message))
//     })
//     .catch(e => console.log(e.message))



// console.log(info)
// fs.promises.writeFile(rutaArchivo, texto3)
//     .then(()=>{
//         console.log(`Archivo guardado!`)
//         return fs.promises.readFile(rutaArchivo, {encoding:"utf-8"})
//     })
//     .then(info=>{
//         console.log(info)
//         return fs.promises.appendFile(rutaArchivo, `\n\nEditorial Planeta`)
//     })
//     .then(()=>console.log(`Editorial agregada`))
//     .catch(e=>console.log(e.message))

let archivos=async()=>{
    try {
        await fs.promises.writeFile(rutaArchivo, texto3)
        console.log(`Archivo generado`)
        let info=await fs.promises.readFile(rutaArchivo, {encoding:"utf-8"})
        console.log(info)
        await fs.promises.appendFile(rutaArchivo, `\n\nEditorial Planeta`)
        console.log(`Editorial agregada!`)
        // setTimeout(async() => {
        //     await fs.promises.unlink(rutaArchivo)
        //     console.log(`Archivo eliminado!`)
        // }, 2000);        
    } catch (error) {
        console.log(error.message)
    }

}

archivos()