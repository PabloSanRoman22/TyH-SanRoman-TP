const Cliente = require("../modelo/Cliente")

test('prueba del constructor',()=>{
    let unCliente = new Cliente("jose123", "Jose", "Ramirez")
    expect(unCliente.getUsuario()).toBe("jose123")
})