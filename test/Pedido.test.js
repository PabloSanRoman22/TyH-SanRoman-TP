const Pedido = require("../modelo/Pedido")
const Cliente = require("../modelo/Cliente")
const Variante = require("../modelo/Variante")
const Producto = require("../modelo/Producto")
const Pago = require("../modelo/Pago")
const Envio = require("../modelo/Envio")

test('test de Pedido',()=>{
    let unCliente = new Cliente("LuisFernandez1984", "Luis", "Fernandez")
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
    expect(unPedido.getPrecioTotal()).toBe(140000)

    expect(unPedido.getPago().estaAprobado()).toBe(false)
    expect(unPedido.getEstado()).toBe("iniciado")
    expect(unPedido.recibido()).toBe(false)

    unPedido.aprobarPago()

    expect(unPedido.getPago().estaAprobado()).toBe(true)
    expect(unPedido.getEstado()).toBe("pagado")
    expect(unPedido.recibido()).toBe(false)

    unPedido.enviar()

    expect(unPedido.getPago().estaAprobado()).toBe(true)
    expect(unPedido.getEstado()).toBe("enviado")
    expect(unPedido.recibido()).toBe(false)

    unPedido.recibir()

    expect(unPedido.getPago().estaAprobado()).toBe(true)
    expect(unPedido.getEstado()).toBe("recibido")
    expect(unPedido.recibido()).toBe(true)

}) 