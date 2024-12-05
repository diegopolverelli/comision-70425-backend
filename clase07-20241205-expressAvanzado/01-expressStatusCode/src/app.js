import express from "express"
import {HeroesManager} from "./dao/HeroesManager.js"
// import {heroes} from "./data/heroes.js"

const PORT=3000
const app=express()

app.get("/", (req, res)=>{

    res.send("Bienvenido al server!!!")
})

app.get("/api/heroes", (req, res)=>{

    let {name, publisher}=req.query

    let heroes=HeroesManager.getHeroes()
    if(name){
        heroes=heroes.filter(h=>h.name.toLowerCase()===name.trim().toLowerCase())
    }
    if(publisher){
        heroes=heroes.filter(h=>h.publisher.toLowerCase()===publisher.trim().toLowerCase())
    }

    res.send(heroes)
})

app.get("/api/heroes/:id", (req, res)=>{

    // let id = req.params.id
    let {id} =req.params
    id=Number(id)
    if(isNaN(id)){
        // return res.status(400).send("Error: El id debe ser numérico...!!!")
        // return res.status(400).send({error:"El id debe ser numérico"})
        res.setHeader("Content-Type","application/json")
        return res.status(400).json({error:"El id debe ser numérico"})
    }

    // NaN "not a number"
    // String
    // Object
    // Array

    let heroes=HeroesManager.getHeroes()
    let heroe=heroes.find(h=>h.id===id)
    if(!heroe){
        // return res.status(404).send(`Error: no existen heroes con id ${id}`)
        return res.status(404).send({error:`Error: no existen heroes con id ${id}`})
    }

    res.status(200).send(heroe)
})

app.get("/api/heroes/nombre/:name", (req, res)=>{

    let name=req.params.name

    let heroes=HeroesManager.getHeroes()
    let heroe=heroes.find(h=>h.name.toLowerCase()===name.trim().toLowerCase())
    if(!heroe){
        return res.status(404).send({error:`Error: no existen heroes con name ${name}`})
    }

    res.status(200).send(heroe)
})



app.listen(PORT, ()=>{
    console.log(`Server corriendo en puerto ${PORT}`)
})