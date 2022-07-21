const Envio = require("../modelo/Envio")

test('envio con costo $450 y a recibir 4 dias despues del pago',()=>{
    let unaFechaPago = new Date(2022, 10, 23);
    let unEnvio = new Envio("Ayacucho 136, CABA", unaFechaPago);
    expect(unEnvio.recibido()).toBe(true)
    expect(unEnvio.getDireccion().toBe("Ayacucho 136, CABA"))
    expect(unEnvio.getCosto()).toBe(450)
    expect(unEnvio.getFechaEstimadaEntrega()).toBe(unEnvio.getFechaEstimadaEntrega()+4)
}) 
