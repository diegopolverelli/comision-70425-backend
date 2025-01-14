import express from 'express';
import { router as productosRouter } from './routes/productosRouter.js';
import { conectaDB } from './ConnDB.js';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/products", productosRouter)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

conectaDB(
    "mongodb+srv://backend70425:CoderCoder123@cluster0.3dgtw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    "clase14"
)
