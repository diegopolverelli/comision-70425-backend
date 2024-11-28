const moment=require("moment")


let fecha=moment()
console.log(fecha)

let fecha2=moment("20221218")
console.log(fecha2.fromNow())
console.log(fecha2.add(1, "year"))

let cumple=moment("19780323")
let dife=fecha.diff(cumple, "y")
console.log(`Usted ha nacido hace ${dife} años`)
