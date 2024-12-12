import express from 'express';
import { uploader } from './utils.js';
import fs from "fs"
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./src/public"))

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.post("/jugadores", uploader.single("foto"), (req, res)=>{
    if(!req.file){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Suba una imagen...!!!`})
    }

    let {nombre}=req.body
    if(!nombre){
        fs.unlinkSync(req.file.path)
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`La prop. nombre es requerida`})
    }

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:{
        nombre, 
        datosArchivo: req.file
    }});
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
