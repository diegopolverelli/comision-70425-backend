let alumno01={
    nombre:'Jimena',
    apellido:'Martinez',
    fechaNacimiento:new Date(1990,2,4),
    email: 'jmartinez@test.com',
    domicilio:'Las Bases 1974, Haedo'
}

// String
// Number
// BigInt
// Array
// Object
let resultado=Object.keys(alumno01)
console.log(resultado)
resultado=Object.values(alumno01)
console.log(resultado)
resultado=Object.entries(alumno01)
console.log(resultado)





let factura={
    numero:107998,
    codigoCliente:'A005',
    fecha: new Date(2023,0,10),
    idTributario:'30333333331',
    subtotal:10000,
    impuestos:{
        tasasGenerales:1.2,
        iibb:2.4,
        iva:21,
        otros:0.5
    }
}

// Total factura???
let tasasImpuestos=Object.values(factura.impuestos)
console.log(tasasImpuestos)
// tasasImpuestos.forEach(tasa=>{
//     console.log(`Recorriendo tasa: ${tasa}`)
// })
let impuesto=0
tasasImpuestos.forEach(tasa=>{
    impuesto+=factura.subtotal*tasa/100
})
console.log(impuesto)
console.log("Total:", impuesto+factura.subtotal)

let total=tasasImpuestos.reduce((acum, tasa)=>{
    return acum+=factura.subtotal*tasa/100
}, factura.subtotal)
console.log("Total con reduce:", total)


