const Cliente = require("./cliente")
const Tienda = require("./tienda")

class Plataforma{
    constructor(nombre){
        this.nombre = nombre
        this.clientes = []
        this.tiendas = []

    }

    existeCliente(unCliente){
        // funcion some busca en un array si existe algun elemento con la condicion deseada y devuelve boolean
        const yaExiste = this.clientes.some(cliente => {
            return cliente.getUsuario()===unCliente.getUsuario()
        })
        return yaExiste
    }
    
    agregarCliente(unCliente){
        if (this.existeCliente(unCliente)) {
            throw Error ("El Cliente que desea agregar ya existe")
        } else {
            // funcion push agrega un elemento al final del array
            this.clientes.push(unCliente) 
        }
    }

    eliminarCliente(unCliente){
        //indexOf devuelve la posicion del elemento en el array comenzando por 0
        let index = this.clientes.indexOf(unCliente)
        //si index > -1 significa que encontro un elemento en el array
        if (index > -1){
            //la funcion splice elimina 1 solo elemento comenzando desde la posicion index
            this.clientes.splice(index, 1)
        }
    }

    getClientes(){
        return this.clientes
    }

    existeTienda(unaTienda){
        // funcion some busca en un array si existe algun elemento con la condicion deseada y devuelve boolean
        const yaExiste = this.tiendas.some(tienda => {
            return tienda.getNombre()===unaTienda.getNombre()
        })
        return yaExiste
    }
    
    agregarTienda(unaTienda){
        if (this.existeTienda(unaTienda)) {
            throw Error ("La Tienda que desea agregar ya existe")
        } else {
            // funcion push agrega un elemento al final del array
            this.tiendas.push(unaTienda) 
        }
    }

    eliminarTienda(unaTienda){
        //indexOf devuelve la posicion del elemento en el array comenzando por 0
        let index = this.tiendas.indexOf(unaTienda)
        //si index > -1 significa que encontro un elemento en el array
        if (index > -1){
            //la funcion splice elimina 1 solo elemento comenzando desde la posicion index
            this.tiendas.splice(index, 1)
        }
    }

    getTiendas(){
        return this.tiendas
    }

    totalCompradoPorCliente(usuario, estado){
        const cantidad = 0
        this.getTiendas().getVentasRealizadas().forEach(venta => {
            if (venta.getCliente().getUsuario()==usuario && venta.getEstado()==estado) {
                cantidad = cantidad + venta.getPrecioTotal() 
            } 
        })
        return cantidad
    }

    ingresosPorSuscripcionesEnUnMes(mes){
        const cantidad = 0
        this.getTiendas().forEach(tienda => {
            cantidad = cantidad + tienda.costoSuscripcionMes(mes) 
        })
        return cantidad
    }
}

module.exports = Plataforma