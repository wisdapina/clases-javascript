/* class Producto {
    constructor(nombre, precio, id) {
        this.nombre = nombre
        this.precio = precio
        this.id = id
    }
}

const diamante = new Producto("diamante", 500, 1)
const atomo = new Producto("atomo", 800, 2)
const jaula = new Producto("jaula", 500, 3)
const estrella = new Producto("estrella", 500, 4)
const producto = []
producto.push(diamante, atomo, jaula, estrella)


let compra = parseInt(prompt("eligue un producto 1.diamante 2.atomo 3.jaula 4.estrella"))
let compraTotal
let seguirComprado = true

const pedido = producto.find(prod => prod.id === compra)

if (pedido) {
    compraTotal = compraTotal + producto.precio
    alert("tu elegiste " + compraTotal)
} else {
    let compra = parseInt(prompt("elige otro 1.diamante 2.atomo 3.jaula 4.estrella"))
} */