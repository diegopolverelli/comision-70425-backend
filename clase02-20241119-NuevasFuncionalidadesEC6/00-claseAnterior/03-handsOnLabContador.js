class Contador{
    static contadorGlobal=0
    #contador
    constructor(responsable){
        this.#contador=0
        this.responsable=responsable
    }

    contar(){
        this.#contador++
        Contador.contadorGlobal++
    }

    getResponsable(){
        return this.responsable
    }

    getCuentaIndividual(){
        return this.#contador
    }

    static getCuentaGlobal(){
        return this.contadorGlobal
    }

}


let c1=new Contador("Pedro")
let c2=new Contador("Ramiro")
let c3=new Contador("Matilde")

c1.contar()
c1.contar()
c1.contar()
c1.contar()
c1.contar()

c2.contar()
c2.contar()
// c2.contador=100

c3.contar()


console.log(`C1, responsable: ${c1.getResponsable()} | valor: ${c1.getCuentaIndividual()}`)
console.log(`C2, responsable: ${c2.getResponsable()} | valor: ${c2.getCuentaIndividual()}`)
console.log(`C3, responsable: ${c3.getResponsable()} | valor: ${c3.getCuentaIndividual()}`)

console.log(`Contador global: ${Contador.getCuentaGlobal()}`)