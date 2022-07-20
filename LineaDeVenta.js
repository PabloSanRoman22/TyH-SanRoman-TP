const Producto = require("./producto")
const Variante = require("./Variante")

// esta clase representa una linea de un pedido o ticket de caja
class LineaDeVenta{
    constructor(producto){
        this.producto = producto
        this.cantidad = 0
        this.producto.getVariantes().forEach(variante => {
            this.cantidad = this.cantidad + variante.getCantidad()
        })
        this.detalle = " "
    }
 
    subTotal(){
        return this.cantidad*this.producto.getPrecio()
    }
    getProducto(){
        return this.producto
    }
    getDetalle(){
        this.detalle = `producto: ${this.producto.getDetalle()} - cantidad: ${this.cantidad} - sub total: ${this.subTotal()} - Variantes: `
        this.producto.getVariantes().forEach(variante => {
            this.detalle = this.detalle + variante.getDetalle()
        })
        return this.detalle
    }

}

module.exports = LineaDeVenta

// inicio de pruebas

let varianteTest1 = new Variante('15476','XL','negro','cuero')
varianteTest1.agregarCantidad(5)
let varianteTest2 = new Variante('15478','L','blanco','cuero')
varianteTest1.agregarCantidad(3)
let producto = new Producto('1234','campera', 25000)
producto.agregarVariante(varianteTest1)
producto.agregarVariante(varianteTest2)
let lineaDeVenta = new LineaDeVenta(producto)

console.log("Linea de Venta: ", lineaDeVenta.getDetalle())