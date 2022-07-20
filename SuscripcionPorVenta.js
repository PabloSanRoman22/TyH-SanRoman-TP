const Suscripcion = require("./suscripcion")
const Descuento = require("./descuento")

class SuscripcionPorVenta extends Suscripcion{
    constructor(){
        super()
        this.abonoMensualBasico=null
        this.cantidadVentasPermitidas=null
        this.costoPorVentaExtra=null
        this.costoMensual=super.costoMensual
    }

    setAbonoMensualBasico(unAbonoMensualBasico){
        this.abonoMensualBasico=unAbonoMensualBasico
    }
    setCantidadVentasPermitidas(unaCantidadVentasPermitidas){
        this.cantidadVentasPermitidas=unaCantidadVentasPermitidas
    }
    setCostoPorVentaExtra(unCostoPorVentaExtra){
        this.costoPorVentaExtra=unCostoPorVentaExtra
    }
    calcularCostoMensual(cantidadVentasDelMes, _precioTotalVentas){
    if (this.abonoMensualBasico!=null && this.cantidadVentasPermitidas!=null && this.costoPorVentaExtra!=null) {
        if (this.hayVentasExtra(cantidadVentasDelMes)) {
            this.costoMensual = this.abonoMensualBasico + ((cantidadVentasDelMes-this.cantidadVentasPermitidas)*this.costoPorVentaExtra)
            this.costoMensual = this.getDescuento().aplicarDescuento(this.costoMensual)
        }
        else{
            this.costoMensual = this.getDescuento().aplicarDescuento(this.abonoMensualBasico)
        }
        }
        return this.costoMensual
    }

    hayVentasExtra(cantidadVentasDelMes){
        return cantidadVentasDelMes>this.cantidadVentasPermitidas
    }

}

module.exports = SuscripcionPorVenta

/* Inicio de Pruebas */

let unaSuscripcionPorVenta = new SuscripcionPorVenta()
unDescuento = new Descuento(10, new Date(2050,4,19))
unaSuscripcionPorVenta.setDescuento(unDescuento)

unaSuscripcionPorVenta.setAbonoMensualBasico(2000)
unaSuscripcionPorVenta.setCantidadVentasPermitidas(20)
unaSuscripcionPorVenta.setCostoPorVentaExtra(100)

let unCostoMensual = unaSuscripcionPorVenta.calcularCostoMensual(10, 10000) //10 ventas por un total de $10000
console.log('Prueba de Suscripcion por Venta con abono basico de $2000 sin excedente y un descuento vigente de 10% sobre la comision total, Se espera un costo mensual de $1800 y se obtiene: ', unCostoMensual)

// prueba con excedente de ventas

let otroCostoMensual = unaSuscripcionPorVenta.calcularCostoMensual(30, 10000) // 10 ventas excedentes
console.log('Prueba de Suscripcion por Venta con abono basico de $2000 con 10 ventas de excedente con un costo de $100 cada una y un descuento vigente de 10% sobre la comision total, se espera un costo mensual de $2700 y se obtiene: ', otroCostoMensual)

/* Fin de Pruebas */