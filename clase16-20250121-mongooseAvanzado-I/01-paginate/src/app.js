import __dirname from './utils.js';
import path from 'path';
import express from 'express';
import { engine } from 'express-handlebars';
import mongoose from "mongoose"

import { router as vistasRouter } from './router/viewsRouter.js';

const PORT = 3000;

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, './views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './public')));

app.use("/", vistasRouter)

app.get("/",(req, res)=>{


    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"OK"});
})

const server = app.listen(PORT, () => {
    console.log(`Server escuchando en puerto ${PORT}`);
});


try {
    await mongoose.connect(
        "mongodb+srv://backend70425:CoderCoder123@cluster0.3dgtw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        {
            dbName: "clase16"
        }
    )
} catch (error) {
    console.log(`Error al conectar a DB...`)
}
