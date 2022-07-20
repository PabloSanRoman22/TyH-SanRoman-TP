const Cliente = require("./cliente")
const Envio = require("./envio")
//eliminar import de producto despues de modularizar los test
const Producto = require("./producto")
//eliminar variante despues de modularizar test
const Variante = require("./variante")
const LineaDeVenta = require("./LineaDeVenta")
const Pago = require("./pago")
const Tienda = require("./tienda")
//eliminar import de suscripciones despues de modularizar los test
const Suscripcion = require("./Suscripcion")
const SuscripcionPorPorcentaje = require("./SuscripcionPorPorcentaje")
const SuscripcionPorVenta = require("./SuscripcionPorVenta")


class Pedido{
    constructor(tienda, cliente, lineaDeVenta, envio, pago){
        this.tienda = tienda
        this.cliente = cliente
        this.lineaDeVenta = lineaDeVenta
        this.envio = envio
        this.pago = pago
        this.estado = 'iniciado'
        this.lineasDeVenta = []
        //this.lineasDeVenta.push(lineaDeVenta) 
        this.agregarLineaDeVenta(this.lineaDeVenta)
        this.precioTotal = 0
        this.detalle = ''
        this.estado = ''
    }
    agregarLineaDeVenta(unaLineaDeVenta){
        if (this.existeLineaDeVenta(unaLineaDeVenta)) {
            throw Error ("Ya existe una Linea de Venta con el mismo producto")
        } else {
            // funcion push agrega un elemento al final del array
            this.lineasDeVenta.push(unaLineaDeVenta) 
        }
    }
    existeLineaDeVenta(unaLineaDeVenta){
        // funcion some busca en un array si existe algun elemento con la condicion deseada y devuelve boolean
        const yaExiste = this.lineasDeVenta.some(lineaDeVenta => {
            return lineaDeVenta.getProducto().getCodigo() === unaLineaDeVenta.getProducto().getCodigo()
        })
        return yaExiste
    }
    eliminarLineaDeVenta(unaLineaDeVenta){
        //indexOf devuelve la posicion del elemento en el array comenzando por 0
        let index = this.lineasDeVenta.indexOf(unaLineaDeVenta)
        //si index > -1 significa que encontro un elemento en el array
        if (index > -1){
            //la funcion splice elimina 1 solo elemento comenzando desde la posicion index
            this.lineasDeVenta.splice(index, 1)
        }
    }
    getPrecioTotal(){
        //sumar precio de todas las lineas de venta
        this.lineasDeVenta.forEach(lineaDeVenta => {
            this.precioTotal = this.precioTotal + lineaDeVenta.subTotal()
        })
        return this.precioTotal
    }
    recibido(unEnvio){
        return unEnvio.recibido()
    }
    getDetalle(){
        this.lineasDeVenta.forEach(lineaDeVenta => {
            this.detalle = this.detalle + lineaDeVenta.getDetalle()
        })
        return this.detalle
    }
    pagar(){
        if (this.pago.estaAprobado() && this.estado == "iniciado") {
            this.estado = "pagado"  
        }
    }    
    enviar(){
        if (this.estado == "pagado" && !(this.envio.recibido())) {
            this.estado = "enviado"
        }
    }
    recibir(){
        if (this.estado == "enviado" && this.envio.recibido()) {
            this.estado = "recibido"
        }
    }
    
}

module.exports = Pedido

// Inicio Pruebas


let unaSuscripcionPorVenta = new SuscripcionPorVenta()
let unaTienda = new Tienda("Todo Ropa", unaSuscripcionPorVenta)
let unCliente = new Cliente("LuisFernandez1984", "Luis", "Fernandez")
let varianteTest1 = new Variante('15476','XL','negro','cuero')
varianteTest1.agregarCantidad(5)
let producto = new Producto('1234','campera', 25000)
producto.agregarVariante(varianteTest1)
let lineaDeVenta1 = new LineaDeVenta(producto)
let unPago = new Pago(new Date())
let unEnvio = new Envio("Ayacucho 136, CABA", unPago.getFechaPago());
let unPedido = new Pedido(unaTienda, unCliente, lineaDeVenta1, unEnvio, unPago)

//agrego otra linea de venta
let varianteTest2 = new Variante('15451','L','azul','jean')
varianteTest2.agregarCantidad(3)
let producto2 = new Producto('1248','jean', 5000)
producto2.agregarVariante(varianteTest2)
let lineaDeVenta2 = new LineaDeVenta(producto2)
unPedido.agregarLineaDeVenta(lineaDeVenta2)

console.log("Se espera un Precio Total de Pedido de $140000: ", unPedido.getPrecioTotal())
console.log(unPedido.getDetalle())