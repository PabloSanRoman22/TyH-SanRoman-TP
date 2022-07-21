const LineaDeVenta = require("../modelo/LineaDeVenta")
const Variante = require("../modelo/Variante")
const Producto = require("../modelo/Producto")

test('se espera un sub total de la linea de venta igual a ',()=>{
    
    let varianteTest1 = new Variante('15476','XL','negro','cuero')
    varianteTest1.agregarCantidad(5)
    let varianteTest2 = new Variante('15478','L','blanco','cuero')
    varianteTest1.agregarCantidad(3)
    let producto = new Producto('1234','campera', 25000)
    producto.agregarVariante(varianteTest1)
    producto.agregarVariante(varianteTest2)
    let lineaDeVenta = new LineaDeVenta(producto)

    expect(lineaDeVenta.subTotal()).toBe(200000)
   
}) 
