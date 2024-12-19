import express from 'express';
import {engine} from "express-handlebars"
import {Server} from "socket.io"

import { router as vistasRouter } from './routes/viewsRouter.js';

const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./src/public"))

app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", "./src/views")


app.use("/", vistasRouter)

const server=app.listen(PORT,()=>{    // server HTTP
    console.log(`Server escuchando en puerto ${PORT}`);
});

let usuarios=[]
let mensajes=[]

const io=new Server(server)  // server web socket

io.on("connection", socket=>{
    console.log(`Se conecto un cliente con id ${socket.id}`)
    socket.emit("saludo", "Bienvenido al server. Identifiquese", mensajes)

    socket.on("id", nombre=>{
        usuarios.push({id: socket.id, nombre})
        socket.broadcast.emit("nuevoUsuario", nombre)
    } )

    socket.on("mensaje", (nombre, mensaje)=>{
        mensajes.push({nombre, mensaje})
        io.emit("nuevoMensaje", nombre, mensaje)  
    })

    socket.on("disconnect", ()=>{
        let usuario=usuarios.find(u=>u.id==socket.id)
        if(usuario){
            io.emit("saleUsuario", usuario.nombre)
        }
    })

})