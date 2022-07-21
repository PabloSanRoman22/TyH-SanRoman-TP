const Descuento = require("./descuento")
const Suscripcion = require("./suscripcion")

class SuscripcionPorPorcentaje extends Suscripcion{
    constructor(){
        super()
        this.costoMensual = super.costoMensual
        this.porcentajeComision = null
    }
    
    setPorcentajeComision(unPorcentajeComision){
        this.porcentajeComision = unPorcentajeComision
    }
    getPorcentajeComision(){
        return this.porcentajeComision
    }
    calcularCostoMensual(_cantidadVentasDelMes, precioTotalVentas){
        if (this.porcentajeComision==0 || precioTotalVentas==0){
            return 0
        } else {
            this.costoMensual = ((precioTotalVentas*this.porcentajeComision)/100)
            console.log('costo mensual sin descuento', this.costoMensual)
            this.costoMensual = this.getDescuento().aplicarDescuento(this.costoMensual)
            console.log('costo mensual con descuento', this.costoMensual)
            return this.costoMensual 
        }
    }
}

module.exports = SuscripcionPorPorcentaje

/* Inicio de Pruebas */

let unaSuscripcionPorPorcentaje = new SuscripcionPorPorcentaje()
unDescuento = new Descuento(10, new Date(2050,4,19))
unaSuscripcionPorPorcentaje.setPorcentajeComision(5)
unaSuscripcionPorPorcentaje.setDescuento(unDescuento)
let unCostoMensual = unaSuscripcionPorPorcentaje.calcularCostoMensual(10, 10000) //10 ventas por un total de $10000
console.log('Prueba de Suscripcion con 5% porcentaje de comision sobre $10000 de ventas y un descuento vigente de 10% sobre la comision, tiene un costo mensual de', unCostoMensual)

/* Fin de Pruebas */

