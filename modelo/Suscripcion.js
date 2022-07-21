const Descuento = require("./descuento")

class Suscripcion{
    constructor(){
        this.costoMensual = 0
        this.descuento = 0
    }

    calcularCostoMensual(cantidadVentasDelMes, precioTotalVentas){
        return this.costoMensual
    }
    /*setDescuento(porcentaje, fechaCaducidad){
        this.descuento = new Descuento(porcentaje, fechaCaducidad)
    }*/
    setDescuento(unDescuento){
        this.descuento = unDescuento
    }
    getDescuento(){
        return this.descuento
    }
}

module.exports = Suscripcion