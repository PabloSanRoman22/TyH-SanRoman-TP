class Cliente{
    constructor(usuario, nombre, apellido){
        this.usuario=usuario
        this.nombre=nombre
        this.apellido=apellido
    }
    getUsuario(){
        return this.usuario
    }
}

module.exports = Cliente

// inicio pruebas

let unCliente = new Cliente("jose123", "Jose", "Ramirez")
console.log(unCliente)
