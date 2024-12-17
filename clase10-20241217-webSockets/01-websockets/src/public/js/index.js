const nombre=prompt("Ingrese su nombre", "Invitado")
document.title=nombre

const divTemperatura=document.querySelector("#temperatura")
const inputMensaje=document.getElementById("mensaje")
const divMensajes=document.getElementById("mensajes")

inputMensaje.focus()
inputMensaje.addEventListener("keyup", e=>{
    e.preventDefault()
    // console.log(e, e.target.value)
    if(e.code=="Enter" && e.target.value.trim().length>0){
        socket.emit("mensaje", nombre, e.target.value.trim())
        e.target.value=""
        inputMensaje.focus()
    }
})

const socket=io()

socket.on("saludo", mensaje=>{
    console.log(mensaje)
    if(nombre){
        socket.emit("id", nombre)
    }
})

socket.on("nuevoMensaje", (nombre, mensaje)=>{
    divMensajes.innerHTML+=`<p><strong>${nombre}</strong> dice <i>${mensaje}</i></p>`
})

socket.on("nuevoUsuario", nombre=>{
    alert(`${nombre} se ha conectado al servidor!`)
})

socket.on("lecturaTemperatura", temp=>{
    divTemperatura.textContent=`La temperatura en el reactor es de °${temp}`
})

socket.on("nuevoHeroe", heroe=>{
    alert(`Alguien ha dado de alta al heroe ${heroe.name}`)
})