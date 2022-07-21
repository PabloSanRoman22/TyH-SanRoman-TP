class Variante{
    constructor(codigo, tamanio, color, material){
        this.codigo = codigo
        this.tamanio = tamanio
        this.color = color
        this.material = material
        this.cantidad = 0
        this.detalle = `codigo: ${codigo} - tamaño: ${tamanio} - color: ${color} - material: ${material} - `
    }

    getCantidad(){
        return this.cantidad
    }
    getCodigo(){
        return this.codigo
    }
    agregarCantidad(unaCantidad){
        this.cantidad = this.cantidad+unaCantidad
    }
    descontarCantidad(unaCantidad){
        this.cantidad = this.cantidad-unaCantidad
    }
    getDetalle(){
        
        return this.detalle
    }
}

module.exports = Variante

// Inicio Pruebas

let varianteTest1 = new Variante('15476','XL','negro','cuero')
varianteTest1.agregarCantidad(5)

console.log(varianteTest1.getDetalle())