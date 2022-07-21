class Descuento{

    constructor(porcentaje, fechaCaducidad){
        this.porcentaje = porcentaje
        this.fechaCaducidad = fechaCaducidad
    }

    aplicarDescuento(monto){
        if (new Date() <= this.fechaCaducidad) {
            return monto - (monto * this.porcentaje / 100)
        }
        else return monto
    }

}

module.exports = Descuento

/* Inicio Pruebas */

// Date en javascript cuenta los meses de 0 a 11, siendo 0 enero y 11 diciembre con formato (aaaa, mm, dd)
let fechaCaducidad = new Date(2055, 10, 23);
let porcentaje = 20;
let descuento = new Descuento(porcentaje,fechaCaducidad);

console.log('Se aplica 20% de descuento a monto $10000 con fechaCaducidad vigente',descuento.aplicarDescuento(10000));

let fechaCaducidad2 = new Date(2021, 10, 23);
let descuento2 = new Descuento(porcentaje,fechaCaducidad2);
console.log('Se intenta aplicar 20% de descuento a monto $10000 con fechaCaducidad NO vigente, debe retornar mismo monto ingresado',descuento2.aplicarDescuento(10000));

/* Fin Pruebas */