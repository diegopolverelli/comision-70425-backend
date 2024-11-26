const crypto=require("crypto")
const fs=require("fs")
const SECRET="CoderCoder123"

// fs.readFile



class UserManager{
    static #usuarios=[]

    static getUsers(){
        return this.#usuarios
    }

    static #generaHash(pass){
        return crypto.createHmac("sha256", SECRET).update(pass).digest("hex")
    }

    static addUser(nombre, email, password){
        if(!nombre || !email || !password){
            console.log(`Complete los datos...!!!`)
            return 
        }

        let regExIncluyeNumeros=/[0-9]/
        if(regExIncluyeNumeros.test(nombre) || nombre.trim().length==0){
            console.log(`nombre inválido: ${nombre}`)
            return 
        }

        let regExEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
        if(!regExEmail.test(email)){
            console.log(`email inválido`)
            return 
        }

        let existe=this.#usuarios.find(u=>u.email==email)
        if(existe){
            console.log(`Usuario con email ${email} ya existe en db, con id ${existe.id}`)
            return 
        }

        let id=1
        if(this.#usuarios.length>0){
            id=Math.max(...this.#usuarios.map(d=>d.id))+1
        }

        password=this.#generaHash(password)

        let nuevoUsuario={
            id, nombre, email, 
            password
        }

        this.#usuarios.push(nuevoUsuario)
        return nuevoUsuario
    }

    static login(email, password){

        password=this.#generaHash(password)

        let usuario=this.#usuarios.find(u=>u.email===email && u.password===password)
        if(!usuario){
            console.log(`Credenciales incorrectas`)
            return 
        }
        console.log(`Login exitoso...!!! para ${usuario.nombre}`)
    }
}

UserManager.addUser("Martina", "martina@test.com", "123")
UserManager.addUser("Martina", "martina@test.com", "123")
UserManager.addUser("Martina", "martina@test.com", "123")
UserManager.addUser("Carlitos22", "martina@test.com", "123")
UserManager.addUser("Carlitos", "carlitostest.com", "123")
UserManager.addUser("   ", "carlitostest.com", "123")
UserManager.addUser("Carlitos", "carlitos@test.com", "123456")

console.log(UserManager.getUsers())

UserManager.login("juan@test.com", "999")
UserManager.login("carlitos@test.com", "999")
UserManager.login("carlitos@test.com", "123456")