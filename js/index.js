import {Carrito} from "./carrito.js";
import {Producto} from "./funcionProducto.js";
import {nuestrosProductos} from './productos.js'



/* Creando carrito vacio*/
const carrito = new Carrito ();

for ( const producto of nuestrosProductos){
    $('#productos__contenido').append(`<li id="${producto.id}"> ${producto.nombre} </li>`);
    $(`#${producto.id}`).click(function(){
    $("#tuCompra").append(`<li id="${producto.id}"> ${producto.nombre}</li>`);
    })
};

$("#botonCompra").click(function(){
    alert (`Gracias por realizar su compra`);
    alert("vacio la lista");
    });

    $("#botonCancela").click(function(){
    alert("vacio la lista");
    });
