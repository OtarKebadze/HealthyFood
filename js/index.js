import {Carrito} from "./carrito.js";
import {Producto} from "./funcionProducto.js";
import {nuestrosProductos} from './productos.js'



/* Creando carrito vacio*/
const carrito = new Carrito ();

console.log(carrito.listaItems());

/* Renderizo la lista*/
for ( const producto of nuestrosProductos){
    $('#productos__contenido').append(`<li id="${producto.id}">${producto.nombre} </li>`);
    $(`#${producto.id}`).click(function(){
    carrito.createItem(producto.nombre);
    console.log(carrito);
    ($("#tuCompra").append(`<li>${producto.nombre}</li>`));
    })
};
/*Botones Compra*/
$("#botonCompra").click(function(){
    alert( `Gracias por su Compra!`)
    location.reload();
    });

    $("#botonCancela").click(function(){
    localStorage.clear();
    location.reload();
    });

