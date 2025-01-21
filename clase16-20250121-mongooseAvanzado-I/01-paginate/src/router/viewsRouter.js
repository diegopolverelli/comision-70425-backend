import { Router } from 'express';
import { UsuariosManager } from '../dao/usuariosManager.js';
export const router=Router()

router.get('/usuarios',async(req,res)=>{

    let {page}=req.query
    if(!page){
        page=1
    }

    // let usuarios=await UsuariosManager.getUsuarios()    
    let {docs: usuarios, totalPages, hasPrevPage, prevPage, hasNextPage, nextPage}=await UsuariosManager.getUsuarios(page)    
    console.log(usuarios)

    return res.status(200).render(
        "usuarios",
        {
            usuarios,
            totalPages, 
            hasPrevPage, 
            prevPage, 
            hasNextPage, 
            nextPage
        }
    )
})