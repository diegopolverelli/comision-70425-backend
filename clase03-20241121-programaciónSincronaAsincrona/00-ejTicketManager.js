class TicketManager{
    static #precioBaseDeGanancia=0.15
    #eventos
    constructor(){
        this.#eventos=[]
    }

    getEventos(){
        return this.#eventos
    }

    addEvento(nombre, lugar, precio, capacidad=50, fecha=new Date()){

        if(!nombre || !lugar || !precio){
            console.log(`Error: Complete los datos...!!!`)
            return
        }

        let existe=this.#eventos.find(e=>e.nombre==nombre && e.lugar==lugar)
        if(existe){
            console.log(`Ya existe el evento ${nombre} en ${lugar}`)
            return 
        }

        let id=1
        if(this.#eventos.length>0){
            id=Math.max(...this.#eventos.map(d=>d.id))+1
        }

        let nuevoEvento={
            id, 
            nombre, 
            lugar, 
            precio:precio+precio*TicketManager.#precioBaseDeGanancia,
            capacidad,
            fecha, 
            participantes:[]
        }
        this.#eventos.push(nuevoEvento)
        return nuevoEvento
        
    }

    agregarUsuario(idEvento, idParticipante){
        let indiceEvento=this.#eventos.findIndex(e=>e.id==idEvento)
        if(indiceEvento==-1){
            console.log(`No exiten eventos con id ${idEvento}`)
            return
        }

        let existe=this.#eventos[indiceEvento].participantes.find(p=>p==idParticipante)
        if(existe){
            console.log(`El participante con id ${idParticipante} ya está inscripto al evento ${idEvento}`)
            return 
        }

        this.#eventos[indiceEvento].participantes.push(idParticipante)
        return this.#eventos[indiceEvento]

    }

}  // fin class


const ticketManager=new TicketManager()
console.log(ticketManager.getEventos())

ticketManager.addEvento("afterClass 2", "zoom", 100, 100, new Date(2024, 11, 10))
ticketManager.addEvento("afterClass 3", "zoom", 100, 100, new Date(2024, 11, 10))
ticketManager.addEvento("afterClass 2", "zoom", 100, 100, new Date(2024, 11, 10))

console.log(ticketManager.getEventos())

ticketManager.agregarUsuario(100, 7)
ticketManager.agregarUsuario(2, 7)
ticketManager.agregarUsuario(2, 1)
ticketManager.agregarUsuario(2, 1)
ticketManager.agregarUsuario(1, 1)
ticketManager.agregarUsuario(1, 2)
ticketManager.agregarUsuario(1, 3)
ticketManager.agregarUsuario(1, 2)



console.log(ticketManager.getEventos())