// operador ** (potencia):
let cuadrado=Math.pow(9, 2)
console.log(cuadrado)
cuadrado=9**2
console.log(cuadrado)
let cubo=3**3
console.log(cubo)

let numeros=[1,2,3,4,5]
console.log(numeros.includes(6))
console.log(numeros.includes(2))

function cuad(numero){
    return numero*numero
}

// map
// let resultado=numeros.map(cuad)
// let resultado=numeros.map(numero=>{
//     return numero**2
// })
let resultado=numeros.map(numero=>numero**2)
console.log(resultado)

resultado=numeros.map((numero, indice, arrayCompleto)=>{
    console.log(`Recorriendo elemento ${indice}, que tiene valor ${numero}, y el array completo es: ${arrayCompleto}`)
    return numero**2
})
console.log(resultado)

// every
resultado=numeros.every(numero=>numero<3)
console.log(resultado)
resultado=numeros.every(numero=>numero>0)
console.log(resultado)

// some
resultado=numeros.some(numero=>numero<3)
console.log(resultado)
resultado=numeros.some(numero=>numero>1000)
console.log(resultado)


// filter
resultado=numeros.filter(n=>n>3)
console.log(resultado)
resultado=numeros.filter(n=>n==4 || n<2)
console.log(resultado)
resultado=numeros.filter(n=>n<0)
console.log(resultado)

// find / findIndex
let nombres1=['Martina', 'Mariela', 'Sandra', 'Ana', 'Jimena', 'Marcelo', 'Julian', 'Ernesto']
resultado=nombres1.find(nombre=>nombre=="Sandra")
console.log(resultado)
resultado=nombres1.find(nombre=>nombre=="Diego")
console.log(resultado)

resultado=nombres1.findIndex(nombre=>nombre=="Sandra")
console.log(resultado)
resultado=nombres1.findIndex(nombre=>nombre=="Diego")
console.log(resultado)

resultado=nombres1.indexOf("Sandra")
console.log(resultado)
resultado=nombres1.indexOf("Diego")
console.log(resultado)


let heroes=[
    {
        id:1,
        name:'Spider-Man',
        alias:'Peter Parker',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:2,
        name:'Superman',
        alias:'Clark Kent',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:3,
        name:'Iron Man',
        alias:'Tony Stark',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:4,
        name:'Wonder Woman',
        alias:'Diana Prince',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:5,
        name:'Black Widow',
        alias:'Natasha Romanoff',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:6,
        name:'Batman',
        alias:'Bruce Wayne',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:7,
        name:'Aquaman',
        alias:'Arthur Curry',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:8,
        name:'Captain America',
        alias:'Steve Rogers',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:9,
        name:'Flash',
        alias:'Barry Allen',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:10,
        name:'Black Panther',
        alias:'TChalla',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:11,
        name:'Green Lantern',
        alias:'Hal Jordan',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:12,
        name:'Thor',
        alias:'Thor Odinson',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:13,
        name:'Batwoman',
        alias:'Kate Kane',
        team:'Bat Family',
        publisher:'DC',
    },
    {
        id:14,
        name:'Hulk',
        alias:'Bruce Banner',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:15,
        name:'Zatanna',
        alias:'Zatanna Zatara',
        team:'Justice League Dark',
        publisher:'DC',
    },
    {
        id:16,
        name:'Doctor Strange',
        alias:'Stephen Strange',
        team:'Defenders',
        publisher:'Marvel',
    },
    {
        id:17,
        name:'Green Arrow',
        alias:'Oliver Queen',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:18,
        name:'Scarlet Witch',
        alias:'Wanda Maximoff',
        team:'Avengers',
        publisher:'Marvel',
    },
    {
        id:19,
        name:'Martian Manhunter',
        alias:'Jonn Jonzz',
        team:'Justice League',
        publisher:'DC',
    },
    {
        id:20,
        name:'Deadpool',
        alias:'Wade Wilson',
        team:'None',
        publisher:'Marvel',
    },
]
resultado=heroes.find(heroe=>heroe.name=="Batman")
console.log(resultado)
resultado=heroes.find(heroe=>heroe.name=="Robin")
console.log(resultado)
resultado=heroes.findIndex(heroe=>heroe.name=="Batman")
console.log(resultado)
resultado=heroes.findIndex(heroe=>heroe.name=="Robin")
console.log(resultado)


// reduce
resultado=numeros.reduce((acumulador, numero)=>{
    return acumulador+=numero
}, 0)
console.log(resultado)

resultado=numeros.reduce((acumulador, numero, indice, arrayCompleto)=>{
    console.log(`Recorriendo elemento ${indice}, que tiene valor ${numero}, acumulador vale ahora ${acumulador}, y el array completo es: ${arrayCompleto}`)
    return acumulador+=numero
}, 0)
console.log(resultado)

// resultado=numeros.reduce((acumulador, numero, indice, arrayCompleto)=>{
//     console.log(`Recorriendo elemento ${indice}, que tiene valor ${numero}, acumulador vale ahora ${acumulador}, y el array completo es: ${arrayCompleto}`)
//     return acumulador+=numero
// }, 50000)
// console.log(resultado)

resultado=numeros.reduce((acumulador, numero, indice, arrayCompleto)=>{
    console.log(`Recorriendo elemento ${indice}, que tiene valor ${numero}, acumulador vale ahora ${acumulador}, y el array completo es: ${arrayCompleto}`)
    return acumulador+=numero
})
console.log(resultado)

resultado=numeros.reduce((acumulador, numero, indice, arrayCompleto)=>{
    console.log(`Recorriendo elemento ${indice}, que tiene valor ${numero}, acumulador vale ahora ${acumulador}, y el array completo es: ${arrayCompleto}`)
    return acumulador+=numero*10
}, 0)
console.log(resultado)

resultado=numeros.reduce((acumulador, numero, indice, arrayCompleto)=>{
    console.log(`Recorriendo elemento ${indice}, que tiene valor ${numero}, acumulador vale ahora ${acumulador}, y el array completo es: ${arrayCompleto}`)
    return acumulador+=numero*10
})
console.log(resultado)