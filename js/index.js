import {Carrito} from "./carrito.js";
import {Producto} from "./funcionProducto.js";
import {nuestrosProductos} from './productos.js'



/* Creando carrito vacio*/
const carrito = new Carrito ();

console.log(carrito.listaItems());

/* Renderizo la lista*/
for ( let producto of nuestrosProductos){
    $('#listaProductos').append(`<li id="${producto.id}" class="productoNombre">${producto.nombre}</li><p id="precioProducto">$${producto.precio}</p>`);
    $(`#${producto.id}`).click(function(){
    carrito.createItem(producto);
    for (let i = 0; i < carrito.length; i++) {
        ($("#tuCompra").append(`<li>${producto.nombre}<input id="cantidad" type="number" value=1><button id="elimina">Eliminar</button>`));
    if ( producto.id == carrito.id) {
        alert('Este producto ya se encuentra en el carrito')
        return
    }
}
})
}

/*Botones*/
$("#botonCompra").click(function(){
    alert( `Gracias por su Compra!`)
    location.reload();
});

$("#botonCancela").click(function(){
    localStorage.clear();
    location.reload();
})

$("#elimina").click(function(){
    alert(`holaaaaaaa`);
})
/*PRECIO FINAL*/

