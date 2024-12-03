import express from "express"
import {UsuariosManager} from "./dao/UsuariosManager.js"

const PORT=3000
const app=express()
const rutaArchivo="./src/data/Usuarios.json"

const usuariosManager=new UsuariosManager(rutaArchivo)


app.get("/", (req, res)=>{


    res.send(`Bienvenido al server...!!!`)
})

app.get("/usuarios", async(req, res)=>{
    let usuarios = await usuariosManager.getUsuarios()

    // console.log(req.query)
    let {limit} =req.query
    if(limit){
        usuarios=usuarios.slice(0, limit)
    }


    res.send(usuarios)
})

app.listen(PORT, ()=>{
    console.log(`Server online en puerto ${PORT}`)
})