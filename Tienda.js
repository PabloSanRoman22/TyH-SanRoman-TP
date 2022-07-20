const Suscripcion = require("./suscripcion")
//const Pedido = require("./pedido")

class Tienda{
    constructor(nombre, suscripcion){
        this.nombre = nombre
        this.suscripcion = suscripcion
    }
}

module.exports = Tienda