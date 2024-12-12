import express from 'express';
import { loggerMiddleware } from './middlewares/logger.js';
import { authMiddleware } from './middlewares/auth.js';
import { router as productosRouter } from './routes/productosRouter.js';

const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(loggerMiddleware)  // midd a nivel app
// app.use(authMiddleware)  // midd a nivel app

app.use("/api/productos", productosRouter)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/heroes', authMiddleware,(req,res)=>{


    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:{
        rol: req.rol, 
        usuario: req.query.user
    }});
})

app.get(
    '/villanos', 
    (req, res, next)=>{
        console.log(`ej. middleware on line ruta /villanos`)
        next()
    },
    (req, res, next)=>{
        console.log(`ej. middleware 2 on line ruta /villanos`)
        next()
    },
    authMiddleware,
    (req,res)=>{

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:{
        rol: req.rol, 
        usuario: req.query.user
    }});
}
)


const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
