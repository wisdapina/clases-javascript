class Producto {
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
producto.push(diamante)
producto.push(atomo)
producto.push(jaula)
producto.push(estrella)

let compra = parseInt(prompt("eligue un producto 1.diamante 2.atomo 3.jaula 4.estrella"))
let compraTotal = 0
let seguirComprado = true
while (seguirComprado == true) {
    if (compra === diamante.id) {
        compraTotal = diamante.precio + compraTotal
        alert("tu producto elegido seria " + diamante.nombre + " " + compraTotal)

    } else if (compra === atomo.id) {
        compraTotal = atomo.precio + compraTotal
        alert("tu producto elegido seria " + atomo.nombre + " " + compraTotal)

    } else if (compra === jaula.id) {
        compraTotal = jaula.precio + compraTotal
        alert("tu producto elegido seria " + jaula.nombre + " " + compraTotal)

    } else if (compra === estrella.id) {
        compraTotal = estrella.precio + compraTotal
        alert("tu producto elegido seria " + estrella.nombre + " " + compraTotal)
    } else {

    }

    break

}