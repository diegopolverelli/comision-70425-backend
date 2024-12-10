import express from 'express';
import {router as personajesRouter} from "./routes/personajes.router.js"
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/personajes", personajesRouter)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

// /api/personajes    

//  /api/personajes/  GET
//  /api/personajes/:id  GET
//  /api/personajes/:id  PUT
//  /api/personajes/  POST
//  /api/personajes/:id  DELETE

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
