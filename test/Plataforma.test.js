const Cliente = require("../modelo/Cliente")
const Plataforma = require("../modelo/Plataforma")
const Tienda = require("../modelo/Tienda")
const SuscripcionPorVenta = require("../modelo/SuscripcionPorVenta")
const Pedido = require("../modelo/Pedido")
const Variante = require("../modelo/Variante")
const Producto = require("../modelo/Producto")
const Pago = require("../modelo/Pago")
const Envio = require("../modelo/Envio")
const LineaDeVenta = require("../modelo/LineaDeVenta")


test('test de integracion del modelo utilizando plataforma como punto de partida',()=>{
    let unaSuscripcionPorVenta = new SuscripcionPorVenta()
    unaSuscripcionPorVenta.setAbonoMensualBasico(2000)
    unaSuscripcionPorVenta.setCantidadVentasPermitidas(20)
    unaSuscripcionPorVenta.setCostoPorVentaExtra(100)
    let unaTienda = new Tienda('Todo Indumentaria', unaSuscripcionPorVenta)
    let unCliente = new Cliente("jose123", "Jose", "Ramirez")
    let unaPlataforma = new Plataforma("Mercado Digital")

    unaPlataforma.agregarCliente(unCliente)
    expect(unaPlataforma.existeCliente(unCliente)).toBe(true)

    unaPlataforma.agregarTienda(unaTienda)
    expect(unaPlataforma.existeTienda(unaTienda)).toBe(true)

    let varianteTest1 = new Variante('15476','XL','negro','cuero')
    varianteTest1.agregarCantidad(5)
    let producto = new Producto('1234','campera', 25000)
    producto.agregarVariante(varianteTest1)
    let lineaDeVenta1 = new LineaDeVenta(producto)
    let unPago = new Pago(new Date())
    let unEnvio = new Envio("Ayacucho 136, CABA", unPago.getFechaPago());
    let unPedido = new Pedido("17852", unCliente, lineaDeVenta1, unEnvio, unPago)

    //agrego otra linea de venta
    let varianteTest2 = new Variante('15451','L','azul','jean')
    varianteTest2.agregarCantidad(3)
    let producto2 = new Producto('1248','jean', 5000)
    producto2.agregarVariante(varianteTest2)
    let lineaDeVenta2 = new LineaDeVenta(producto2)
    unPedido.agregarLineaDeVenta(lineaDeVenta2)

    expect(unaPlataforma.totalCompradoPorCliente("jose123","iniciado")).toBe(140000)
    
}) 