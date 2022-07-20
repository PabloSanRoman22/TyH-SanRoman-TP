const Suscripcion = require("./suscripcion")
const SuscripcionPorVenta = require("./suscripcionPorVenta")
const SuscripcionPorPorcentaje = require("./suscripcionPorPorcentaje")
//const Pedido = require("./pedido")
const Producto = require("./producto")
const Variante = require("./variante")

class Tienda{
    constructor(nombre, suscripcion){
        this.nombre = nombre
        this.suscripcion = suscripcion
        this.pedidosActivos = []
        this.ventasRealizadas = []
        this.catalogo = []
    }

    agregarProductoEnCatalogo(unProducto){
        if (this.existeProductoEnCatalogo(unProducto)) {
            throw Error ("El Producto que desea agregar ya existe")
        } else {
            // funcion push agrega un elemento al final del array
            this.catalogo.push(unProducto) 
        }
    }
    existeProductoEnCatalogo(unProducto){
        // funcion some busca en un array si existe algun elemento con la condicion deseada y devuelve boolean
        const yaExiste = this.catalogo.some(producto => {
            return producto.getCodigo()===unProducto.getCodigo()
        })
        return yaExiste
    }
    eliminarProductoEnCatalogo(unProducto){
        //indexOf devuelve la posicion del elemento en el array comenzando por 0
        let index = this.catalogo.indexOf(unProducto)
        //si index > -1 significa que encontro un elemento en el array
        if (index > -1){
            //la funcion splice elimina 1 solo elemento comenzando desde la posicion index
            this.catalogo.splice(index, 1)
        }
    }
    getStockProducto(unProducto){
        if (this.existeProductoEnCatalogo(unProducto)) {
            return unProducto.getStockProducto()
        } else {
            throw Error ("El Producto que desea consultar stock no existe en el catalogo de la Tienda")
        }
    }
    getCatalogo(){
        return this.catalogo
    }
    
   
}

module.exports = Tienda

//Inicio Pruebas

// suscripcion
let unaSuscripcionPorVenta = new SuscripcionPorVenta()
unaSuscripcionPorVenta.setAbonoMensualBasico(2000)
unaSuscripcionPorVenta.setCantidadVentasPermitidas(20)
unaSuscripcionPorVenta.setCostoPorVentaExtra(100)

// creo la tienda
//let unaTienda = new Tienda('Todo Indumentaria', unaSuscripcionPorVenta)

// producto
let varianteTest1 = new Variante('15476','XL','negro','cuero')
varianteTest1.agregarCantidad(5)
let varianteTest2 = new Variante('15455','L','blanco','cuero')
varianteTest2.agregarCantidad(3)
let unProducto = new Producto('1234','campera', 25000)
unProducto.agregarVariante(varianteTest1)
unProducto.agregarVariante(varianteTest2)

// agrego producto con variantes al catalogo de tienda
/*unaTienda.agregarProductoEnCatalogo(unProducto)
console.log("Catalogo: ", unaTienda.getCatalogo())*/


