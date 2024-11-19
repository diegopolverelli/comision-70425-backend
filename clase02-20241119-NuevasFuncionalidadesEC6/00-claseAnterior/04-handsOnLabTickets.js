class ProductsManager{
    static ganancia=15
    #products
    constructor(){
        this.#products=[
            {
                id:1, code:"pr001", title: "Martillo", price: 20, stock: 5
            },
            {
                id:2, code:"pr007", title: "Clavos", price: 1.9, stock: 500
            },
            {
                id:3, code:"pr014", title: "Escalera", price: 390, stock: 2
            },
        ]
    }

    getProductById(id){
        let producto=this.#products.find(p=>p.id===id)
        if(!producto){
            // console.log()
            return `No existen productos con id ${id}`
        }
        return producto
    }
    
    addProduct(code, title, price=0, stock=0){
        // validaciones
        if(!code || !title){
            console.log(`complete title | code`)
            return 
        }

        let existe=this.#products.find(p=>p.code===code)
        if(existe){
            console.log(`El producto con code ${code} ya existe en BD`)
            return 
        }

        // generar data adicional
        let id=1
        if(this.#products.length>0){
            id=this.#products[this.#products.length-1].id + 1
        }

        let nuevoProducto={
            id, 
            code,
            title, 
            price, 
            stock
        }
        this.#products.push(nuevoProducto)
        return nuevoProducto
    }

    getProducts(){
        return this.#products
    }

    getListaPrecios(){
        let lista=`Lista de precios Noviembre 2024
`
        this.#products.forEach(p=>{
            lista+=`Producto: ${p.title} | precio: $ ${p.price+p.price*ProductsManager.ganancia/100} | inventario: ${p.stock}
`
        })
        return lista
    }
}

const productManager=new ProductsManager()

console.log(productManager.getProducts())
console.log(productManager.getListaPrecios())
productManager.addProduct("pr002", "Serrucho", 19, 5)
productManager.addProduct("pr007", "Serrucho Largo", 23, 1)
// console.log(productManager.getListaPrecios())
console.log(productManager.getProducts())


console.log(productManager.getProductById(98))
console.log(productManager.getProductById(3))