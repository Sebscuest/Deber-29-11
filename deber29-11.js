'use strict'

let producto = {
    descripcion: "Jamon",
    precio: 2,
    stock: 4,
    verStock: function(){
        alert(this.stock);
    },
}

producto.verStock();
producto.actualizarStock (prompt("Ingrese Nuevo Stock:"));
producto.verStock();
