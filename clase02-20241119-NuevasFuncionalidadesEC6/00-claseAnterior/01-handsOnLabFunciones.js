
const mostrarLista=(lista=[])=>{
    if(!Array.isArray(lista)){
        console.log(`El argumento no es de tipo array. Error`)
        return 
    }

    if(lista.length===0){
        console.log(`Lista vacía`)
        return 
    }

    // lista.forEach(elemento=>{
    //     console.log(elemento)
    // })
    lista.forEach(elemento=>console.log(elemento))
    console.log(`La cantidad de elementos de la lista es de ${lista.length}`)
}

mostrarLista()
mostrarLista([1, 2, 3, 4])
mostrarLista(7214)
mostrarLista(["Juan", "Maria"])
mostrarLista(["Juan", "Maria", {name:"Peter"}])