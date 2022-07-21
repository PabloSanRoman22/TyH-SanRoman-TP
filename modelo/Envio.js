class Envio{
    constructor(direccion, fechaPago){
        this.fechaEstimadaEntrega = new Date(fechaPago.getTime())
        //se establecen los 4 dias de entrega desde la realización del pedido como solicita el enunciado
        this.fechaEstimadaEntrega.setDate(this.fechaEstimadaEntrega.getDate()+4)
        this.direccion=direccion
        //se establecen los $450 de costo de envío fijo que solicita el enunciado
        this.costo=450
        
    }

    getDireccion(){
        return this.direccion
    }
    setFechaEstimadaEntrega(unaFechaDeEntrega){
        this.fechaEstimadaEntrega=unaFechaDeEntrega
    }
    getFechaEstimadaEntrega(){
        return this.fechaEstimadaEntrega
    }
    setCosto(unCosto){
        this.costo=unCosto
    }
    getCosto(){
        return this.costo
    }
    recibido(){
        return (this.getFechaEstimadaEntrega() > new Date())
    }
}

module.exports = Envio

// inicio Pruebas

// Date en javascript cuenta los meses de 0 a 11, siendo 0 enero y 11 diciembre con formato (aaaa, mm, dd)
let unaFechaPago = new Date(2022, 10, 23);
let unEnvio = new Envio("Ayacucho 136, CABA", unaFechaPago);
console.log("El envío fue recibido: ", unEnvio.recibido())
// ojo al convertirlo en assert hacer coincidir los meses de javascript
console.log('envio con costo $450 y a entregar 4 dias despues del pago a: ', unEnvio.getDireccion(), unEnvio.getCosto(), unEnvio.getFechaEstimadaEntrega())
