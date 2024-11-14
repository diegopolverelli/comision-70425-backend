let edad=41
console.log(edad)

let usuarios=[
    {id:1, nombre:"Luciana", email:"luciana@test.com", password:"123", rol:"user"},
    {id:2, nombre:"Juan", email:"juan@test.com", password:"123", rol:"user"},
    {id:3, nombre:"Romina", email:"romina@test.com", password:"123", rol:"admin"},
]

usuarios.forEach(usuario=>console.log(usuario.nombre))

// usuarios.forEach(usuario=>{
//     // let parrafo=document.createElement("p")
//     // parrafo.textContent=usuario.nombre
//     // document.body.append(parrafo)
// })