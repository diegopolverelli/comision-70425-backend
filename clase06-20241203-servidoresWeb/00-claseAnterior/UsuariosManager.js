const fs=require("fs")
let rutaArchivo="./archivos/Usuarios.json"

class UsuariosManager{

    #path=""
    constructor(rutaArchivo){
        this.#path=rutaArchivo
    }

    async getUsuarios(){
        if(fs.existsSync(this.#path)){
            return JSON.parse(await fs.promises.readFile(this.#path, {encoding:"utf-8"}))
        }else{
            // throw new Error(`No existe el archivo ${this.#path}`)
            return []
        }
    }

    async addUsuario(nombre, email){
        if (!nombre || !email){
            console.log(`nombre | email son requeridos`)
            return 
        }

        let usuarios=await this.getUsuarios()

        let id=1
        if(usuarios.length>0){
            id=Math.max(...usuarios.map(d=>d.id))+1
        }
        
        let existe=usuarios.find(u=>u.email===email)
        if(existe){
            console.log(`Usuario con email ${email} ya existe...!!!`)
            return 
        }

        // resto de validaciones pertinentes...
        let nuevoUsuario={
            id, nombre, email
        }

        usuarios.push(nuevoUsuario)
        await fs.promises.writeFile(this.#path, JSON.stringify(usuarios, null, 5))
        return nuevoUsuario
    }
}

const ejercicio=async()=>{
    const usuariosManager=new UsuariosManager(rutaArchivo)
    let usuarios=await usuariosManager.getUsuarios()
    console.log(usuarios)

    await usuariosManager.addUsuario("Matilde", "mati@test.com")
    await usuariosManager.addUsuario("Matilde", "mati@test.com")
    await usuariosManager.addUsuario("Pedro", "pedro@test.com")
    await usuariosManager.addUsuario("Luciana", "lu1990@test.com")

    usuarios=await usuariosManager.getUsuarios()
    console.log(usuarios)

}

ejercicio()