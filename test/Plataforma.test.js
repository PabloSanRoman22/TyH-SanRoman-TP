const Cliente = require("../modelo/Cliente")
const Plataforma = require("../modelo/Plataforma")
const Tienda = require("../modelo/Tienda")
const SuscripcionPorVenta = require("../modelo/SuscripcionPorVenta")

test('test de plataforma',()=>{
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

    
}) 