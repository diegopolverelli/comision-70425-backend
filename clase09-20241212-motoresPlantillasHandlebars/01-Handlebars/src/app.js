import express from 'express';
import {engine} from "express-handlebars"
import { router as vistasRouter } from './routes/viewsRouter.js';
import { router as productosRouter } from './routes/productosRouter.js';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./src/public"))

app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", "./src/views")

app.use("/api/productos", productosRouter)
app.use("/", vistasRouter)

app.get('/',(req,res)=>{
    // res.setHeader('Content-Type','text/plain');
    // res.status(200).send('OK');

    let {nombre} = req.query
    if(!nombre){
        nombre="amigo"
    }

    res.render("inicio", {
        nombre
    })
})



const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
