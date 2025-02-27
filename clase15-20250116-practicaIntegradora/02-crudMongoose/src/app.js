import express from 'express';
import mongoose from 'mongoose';

import { router as heroesRouter } from './routes/heroesRouter.js';
import { router as villanosRouter } from './routes/villanosRouter.js';
import { config } from './config/config.js';
const PORT=config.PORT;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/heroes", heroesRouter)
app.use("/api/villanos", villanosRouter)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

try {
    await mongoose.connect(
        "mongodb+srv://backend70425:CoderCoder123@cluster0.3dgtw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        {
            dbName: "clase15"
        }
    )
    console.log(`DB online!`)
} catch (error) {
    console.log(`Error al conectar a db: ${error.message}`)
}


