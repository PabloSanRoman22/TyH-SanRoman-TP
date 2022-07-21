const Variante = require("../modelo/Variante")

test('test de Variante',()=>{
    let varianteTest1 = new Variante('15476','XL','negro','cuero')
    varianteTest1.agregarCantidad(5)

    expect(varianteTest1.getCantidad()).toBe(5)

    varianteTest1.descontarCantidad(2)
    expect(varianteTest1.getCantidad()).toBe(3)

})