import { usuariosModelo } from "./models/usuariosModelo.js";

export class UsuariosManager{
    static async getUsuarios(page){
        // return usuariosModelo.find().sort({first_name:-1}).lean()
        return usuariosModelo.paginate(
            {},  // filtro... podría ser {last_name="Smith"}
            {
                limit:10, 
                page, 
                lean:true, 
                // sort:{first_name:-1},
            }
        )
    }
}