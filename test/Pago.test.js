const Pago = require("../modelo/Pago")

test('test de pago',()=>{
   let unPago = new Pago(new Date())
   expect(unPago.estaAprobado).toBe(false)
   unPago.aprobarPago()
   expect(unPago.estaAprobado()).toBe(true)
}) 