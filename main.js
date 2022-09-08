class Producto {
    constructor(id, nombre, precio) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }
}

const producto1 = new Producto(1, "diamante", 1200)
const producto2 = new Producto(2, "atomo", 800)
const producto3 = new Producto(3, "jaula", 700)
const producto4 = new Producto(4, "estrella", 1000)

const carrito = []
carrito.push(producto1, producto2, producto3, producto4)


let compraTotal = 0
let seguirComprado = true

let compra = parseInt(prompt("Elige un producto 1.diamante 2.atomo 3.jaula 4.estrella"))
let decision
while (seguirComprado) {

    const pedido = carrito.find(prod => prod.id === compra)


    if (pedido) {
        compraTotal = compraTotal + pedido.precio
    } else {
        prompt("ingresaste un dato invalido")
    }

    let decision = parseInt(prompt("¿Quieres seguir comprando 1.si  2.no?"))
    if (decision === 1) {
        let compra = parseInt(prompt("Agrega otro producto 1.diamante 2.atomo 3.jaula 4.estrella"))

    } else {
        break
    }

}
alert("El monto total de tu compra es de  " + compraTotal)