import express from 'express';
import { router as heroesRouter } from './routes/heroesRouter.js';
import {Server} from "socket.io"
const PORT=3000;
let serverSockets

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./src/public"))

app.use(
    '/api/heroes', 
    (req, res, next)=>{
        req.socket=serverSockets
        next()
    },
    heroesRouter
)

app.get('/',(req,res)=>{

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const serverHTTP=app.listen(PORT,()=>{    // server HTTP
    console.log(`Server escuchando en puerto ${PORT}`);
});

// export const serverSockets=new Server(serverHTTP)           // server Sockets (suele llamare "io")
serverSockets=new Server(serverHTTP)           // server Sockets (suele llamare "io")

serverSockets.on("connection", socket=>{
    console.log(`Se conecto un cliente con id ${socket.id}`)

    socket.emit("saludo", "Bienvenido al server. Identificate!")

    socket.on("id", nombre=>{
        console.log(`El cliente con id ${socket.id} se ha identificado como ${nombre}`)
        socket.broadcast.emit("nuevoUsuario", nombre)
    })

    socket.on("mensaje", (nombre, mensaje)=>{
        serverSockets.emit("nuevoMensaje", nombre, mensaje)
    })

})

let temperatura=0
setInterval(() => {
    // proceso lectura temperatura...
    temperatura=Math.floor(Math.random()*(8)+26)      // Math.floor(Math.random()*(cantNrosAGenerar)+aPartirDelNro)
    serverSockets.emit("lecturaTemperatura", temperatura)
}, 1000);
