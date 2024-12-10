import express from 'express';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const nombres=["Juan", "Mariana", "Lucas"]

app.get("/api/nombres", (req, res)=>{

    let resultado=nombres.map(n=>n.toUpperCase())

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({nombres:resultado});
})

app.get("/api/nombres/:pos", (req, res)=>{  
    if(nombres.length===0){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`No hay nombres para listar`})
    }

    let {pos}=req.params
    pos=Number(pos)
    if(isNaN(pos)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Indique un id numérico`})
    }

    if(pos<1 || pos>nombres.length){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`La pos. debe estar entre 1 y ${nombres.length}`})
    }

    let nombre=nombres[pos-1]

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({nombre});

})

app.post("/api/nombres", (req, res)=>{
    let {nombre} = req.body
    if(!nombre){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`La prop. nombre es requerida`})
    }

    nombres.push(nombre)

    res.setHeader('Content-Type','application/json');
    return res.status(201).json({payload:`Se agregó el nombre ${nombre}`, nombres});

})

app.put("/api/nombres/:pos", (req, res)=>{  
    if(nombres.length===0){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`No hay nombres para modificar`})
    }

    let {pos}=req.params
    pos=Number(pos)
    if(isNaN(pos)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Indique un id numérico`})
    }

    if(pos<1 || pos>nombres.length){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`La pos. debe estar entre 1 y ${nombres.length}`})
    }

    let {nombre}=req.body
    if(!nombre){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`La prop. nombre es requerida`})
    }

    let nombreAnterior=nombres[pos-1]
    nombres[pos-1]=nombre

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:`Nombre modificado`, nombreAnterior, nombreNuevo:nombre, nombres});

})

app.delete("/api/nombres/:pos", (req, res)=>{  
    if(nombres.length===0){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`No hay nombres para eliminar`})
    }

    let {pos}=req.params
    pos=Number(pos)
    if(isNaN(pos)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Indique un id numérico`})
    }

    if(pos<1 || pos>nombres.length){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`La pos. debe estar entre 1 y ${nombres.length}`})
    }

    let nombreEliminado=nombres[pos-1]
    nombres.splice(pos-1, 1)

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:`Nombre eliminado con éxito`, nombreEliminado, nombres});

})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
