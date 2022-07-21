const Variante = require("../modelo/Variante")
const Producto = require("../modelo/Producto")

test('test de Producto',()=>{

    let varianteTest1 = new Variante('15476','XL','negro','cuero')
    varianteTest1.agregarCantidad(5)
    let varianteTest2 = new Variante('15455','L','blanco','cuero')
    varianteTest2.agregarCantidad(3)

    let producto = new Producto('1234','campera', 25000)
    producto.agregarVariante(varianteTest1)
    expect(producto.existeVariante(varianteTest1)).toBe(true)

    producto.agregarVariante(varianteTest2)
    expect(producto.existeVariante(varianteTest2))

    expect(producto.getStockTotal()).toBe(8)

    producto.eliminarVariante(varianteTest1)
    expect(producto.existeVariante(varianteTest1)).toBe(false)

})