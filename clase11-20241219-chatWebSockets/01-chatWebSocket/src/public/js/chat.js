Swal.fire({
    title:"Identifiquese",
    input:"text",
    text:"Ingrese su nickname",
    inputValidator: (value)=>{
        return !value && "Debe ingresar un nombre...!!!"
    },
    allowOutsideClick:false
})
.then(res=>{
    // console.log(res)
    const nombre=res.value
    document.title=nombre
    const socket=io()

    const inputMensaje=document.querySelector("#mensaje")
    // const inputMensaje=document.getElementById("mensaje")
    const divMensajes=document.querySelector("#mensajes")
    inputMensaje.focus()

    socket.on("saludo", (texto, mensajes)=>{
        mensajes.forEach(m=>{
            const clean = DOMPurify.sanitize(m.mensaje, { USE_PROFILES: { html: false } })

            let parrafo=document.createElement("p")
            parrafo.classList.add("mensaje")
            parrafo.innerHTML=`<strong>${m.nombre}</strong> dice <i>${clean}</i>` 
            divMensajes.append(parrafo)
            divMensajes.scrollTop=divMensajes.scrollHeight
        })
        if(nombre){
            socket.emit("id", nombre)
        }
    })

    socket.on("nuevoUsuario", nombre=>{
        Swal.fire({
            text:`${nombre} se ha conectado...!!!`,
            toast:true,
            position:"top-right"
        })
    })

    socket.on("nuevoMensaje", (nombre, mensaje)=>{
        const clean = DOMPurify.sanitize(mensaje, { USE_PROFILES: { html: false } })
        let parrafo=document.createElement("p")
        parrafo.classList.add("mensaje")
        parrafo.innerHTML=`<strong>${nombre}</strong> dice <i>${clean}</i>` 
        // parrafo.textContent=`${nombre} dice ${mensaje}` 
        divMensajes.append(parrafo)
        divMensajes.scrollTop=divMensajes.scrollHeight
    })

    socket.on("saleUsuario", nombre=>{
        let parrafo=document.createElement("p")
        parrafo.classList.add("mensaje")
        parrafo.innerHTML=`<strong>${nombre}</strong> ha salido del servidor...` 
        divMensajes.append(parrafo)
        divMensajes.scrollTop=divMensajes.scrollHeight
    })

    inputMensaje.addEventListener("keyup", e=>{
        e.preventDefault()

        // console.log(e, e.target.value)
        if(e.code==="Enter" && e.target.value.trim().length>0){
            socket.emit("mensaje", nombre, e.target.value.trim())
            e.target.value=""
            inputMensaje.focus()
        }
    })
})
.catch(e=>{
    console.log(e.message)
})

