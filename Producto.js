const Variante = require("./variante")

class Producto{
    constructor(codigo, nombre, precio){
        this.codigo = codigo
        this.nombre = nombre
        this.precio = precio
        this.variantes = []
        this.stockTotal = 0
        this.detalle = `codigo: ${codigo} - nombre: ${nombre} - precio por unidad: ${precio}`
    }

    getPrecio(){
        return this.precio
    }

    getStockTotal(){
        // funcion reduce realiza suma y devuelve valor
        this.stockTotal = this.variantes.reduce((total, variante) => {
            return total + variante.getCantidad()
        }, 0)
        return this.stockTotal
    }

    existeVariante(unaVariante){
        // funcion some busca en un array si existe algun elemento con la condicion deseada y devuelve boolean
        const yaExiste = this.variantes.some(variante => {
            return variante.getCodigo()===unaVariante.getCodigo()
        })
        return yaExiste
    }
    
    agregarVariante(unaVariante){
        if (this.existeVariante(unaVariante)) {
            throw Error ("El Producto que desea agregar ya existe")
        } else {
            // funcion push agrega un elemento al final del array
            this.variantes.push(unaVariante) 
        }
    }

    getVariantes(){
        return this.variantes
    }

    eliminarVariante(unaVariante){
        //indexOf devuelve la posicion del elemento en el array comenzando por 0
        let index = this.variantes.indexOf(unaVariante)
        //si index > -1 significa que encontro un elemento en el array
        if (index > -1){
            //la funcion splice elimina 1 solo elemento comenzando desde la posicion index
            this.variantes.splice(index, 1)
            this.stockTotal = this.stockTotal - unaVariante.getCantidad()
        }
    }
    getDetalle(){
        return this.detalle
    }
    getCodigo(){
        return this.codigo
    }
}

module.exports = Producto

// Inicio de Pruebas

let varianteTest1 = new Variante('15476','XL','negro','cuero')
varianteTest1.agregarCantidad(5)

let varianteTest2 = new Variante('15455','L','blanco','cuero')
varianteTest2.agregarCantidad(3)

let producto = new Producto('1234','campera', 25000)
producto.agregarVariante(varianteTest1)
producto.agregarVariante(varianteTest2)

console.log('se espera que exista la variante agregada en producto ', producto.existeVariante(varianteTest1))
console.log('se espera que exista la variante agregada en producto ', producto.existeVariante(varianteTest2))
console.log('Se espera que se agreguen correctamente 2 variantes distintas al producto', producto.getVariantes())
console.log('Se espera que el stock total del producto es la suma de los stock de sus variantes', producto.getStockTotal())

producto.eliminarVariante(varianteTest1)
console.log('Se espera que el stock total del producto sea 3 luego de la eliminacion de variante', producto.getStockTotal())
console.log('se espera que no exista la variante eliminada en producto ', producto.existeVariante(varianteTest1))

console.log('detalle del producto: ', producto.getDetalle())
