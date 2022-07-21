class Pago{
    constructor(fecha){
        this.fecha=fecha
        this.pagoAprobado=false
    }

    aprobarPago(){
        this.pagoAprobado=true
    }
    estaAprobado(){
        return this.pagoAprobado
    }
    getFechaPago(){
        return this.fecha
    }
}

module.exports = Pago