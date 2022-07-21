const Variante = require("../modelo/Variante")
const Producto = require("../modelo/Producto")

test('test de Pedido',()=>{

let varianteTest1 = new Variante('15476','XL','negro','cuero')
varianteTest1.agregarCantidad(5)

let varianteTest2 = new Variante('15455','L','blanco','cuero')
varianteTest2.agregarCantidad(3)

let producto = new Producto('1234','campera', 25000)
producto.agregarVariante(varianteTest1)
producto.agregarVariante(varianteTest2)

console.log('se espera que exista la variante agregada en producto ', producto.existeVariante(varianteTest1))
console.log('se espera que exista la variante agregada en producto ', producto.existeVariante(varianteTest2))
console.log('Se espera que se agreguen correctamente 2 variantes distintas al producto', producto.getVariantes())
console.log('Se espera que el stock total del producto es la suma de los stock de sus variantes', producto.getStockTotal())

producto.eliminarVariante(varianteTest1)
console.log('Se espera que el stock total del producto sea 3 luego de la eliminacion de variante', producto.getStockTotal())
console.log('se espera que no exista la variante eliminada en producto ', producto.existeVariante(varianteTest1))

console.log('detalle del producto: ', producto.getDetalle())

})