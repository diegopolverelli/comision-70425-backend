import { Router } from 'express';
import { HeroesManager } from '../dao/HeroesManager.js';
export const router=Router()

router.get('/',(req,res)=>{

    let {nombre} = req.query

    res.render("home", {
        nombre, 
        estilo:"stylesHome"
    })
})

router.get('/heroes',async(req,res)=>{

    let heroes=await HeroesManager.getHeroes()

    res.render("heroes", {
        heroes, estilo:"styles"
    })
})