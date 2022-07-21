const Descuento = require("../modelo/Descuento")

test('Se le aplica 20% de descuento a un monto de $10000 con fecha de caducidad vigente y se espera obtener 8000',()=>{
    let fechaCaducidad = new Date(2055, 10, 23);
    let porcentaje = 20;
    let descuento = new Descuento(porcentaje,fechaCaducidad);
    expect(descuento.aplicarDescuento(10000)).toBe(8000)
})  

test('Se le aplica 20% de descuento a un monto de 10000 con fecha de caducidad NO vigente y se espera obtener 10000',()=>{
    let fechaCaducidad2 = new Date(2021, 10, 23);
    let porcentaje = 20;
    let descuento2 = new Descuento(porcentaje,fechaCaducidad2);
    expect(descuento2.aplicarDescuento(10000)).toBe(10000)
})
