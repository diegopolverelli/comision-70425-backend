import express from "express"
import {HeroesManager} from "./dao/HeroesManager.js"
// import {heroes} from "./data/heroes.js"

const PORT=3000
const app=express()

app.get("/", (req, res)=>{

    res.send("Bienvenido al server!!!")
})

app.get("/api/heroes", (req, res)=>{

    let heroes=HeroesManager.getHeroes()

    res.send(heroes)
})

app.get("/api/heroes/:id", (req, res)=>{

    // let id = req.params.id
    let {id} =req.params
    id=Number(id)
    if(isNaN(id)){
        return res.send("Error: El id debe ser numérico...!!!")
    }

    // NaN "not a number"
    // String
    // Object
    // Array

    let heroes=HeroesManager.getHeroes()
    let heroe=heroes.find(h=>h.id===id)
    if(!heroe){
        return res.send(`Error: no existen heroes con id ${id}`)
    }

    res.send(heroe)
})

app.get("/api/heroes/nombre/:name", (req, res)=>{

    let name=req.params.name

    let heroes=HeroesManager.getHeroes()
    let heroe=heroes.find(h=>h.name.toLowerCase()===name.trim().toLowerCase())
    if(!heroe){
        return res.send(`Error: no existen heroes con name ${name}`)
    }

    res.send(heroe)
})



app.listen(PORT, ()=>{
    console.log(`Server corriendo en puerto ${PORT}`)
})