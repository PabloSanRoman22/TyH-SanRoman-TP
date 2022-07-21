const Variante = require("../modelo/Variante")
const Producto = require("../modelo/Producto")
const SuscripcionPorVenta = require("../modelo/SuscripcionPorVenta")

test('test de Tienda',()=>{
    // suscripcion
    let unaSuscripcionPorVenta = new SuscripcionPorVenta()
    unaSuscripcionPorVenta.setAbonoMensualBasico(2000)
    unaSuscripcionPorVenta.setCantidadVentasPermitidas(20)
    unaSuscripcionPorVenta.setCostoPorVentaExtra(100)

    // creo la tienda
    let unaTienda = new Tienda('Todo Indumentaria', unaSuscripcionPorVenta)

    // producto
    let varianteTest1 = new Variante('15476','XL','negro','cuero')
    varianteTest1.agregarCantidad(5)
    let varianteTest2 = new Variante('15455','L','blanco','cuero')
    varianteTest2.agregarCantidad(3)
    let unProducto = new Producto('1234','campera', 25000)
    unProducto.agregarVariante(varianteTest1)
    unProducto.agregarVariante(varianteTest2)
    unaTienda.agregarProductoEnCatalogo(unProducto)

    expect(unaTienda.existeProductoEnCatalogo(unProducto)).toBe(true)
    expect(unaTienda.getStockProducto(unProducto)).toBe(8)

    unaTienda.eliminarProductoEnCatalogo(unProducto)
    expect(unaTienda.existeProductoEnCatalogo(unProducto)).toBe(false)
})