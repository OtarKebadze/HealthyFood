import {Carrito} from "./carrito.js";
import {Producto} from "./funcionProducto.js";
import {nuestrosProductos} from './productos.js'



/* Creando carrito vacio*/
const carrito = new Carrito ();


/* Renderizo la lista*/

for ( let producto of nuestrosProductos){
    $('#listaProductos').append(`<li id="${producto.id}" class="productoNombre">${producto.nombre}</li><p id="precioProducto">$${producto.precio}</p>`);
    let verdadero = producto.cond;
    $(`#${producto.id}`).click(function(){
    carrito.createItem(producto);
    if( verdadero == false ){
    ($("#tuCompra").append(`<li>${producto.nombre}<input id="cantidad" type="number" value=${producto.cant}><button id="elimina">Eliminar</button>`));
    verdadero=true;
    }else{
    alert(`el item ${producto.nombre} ya existe en el carrito`)

    }
})
}
/*Botones UP y DOWN Input*/
$(document).delegate("li#cantidad","change",function(){
    alert("hola")
});
$("#cantidad").keydown(function(){
    console.log("hola")
});

/*Botones*/
$("#botonCompra").click(function(){
    alert( `Gracias por su Compra!`)
    localStorage.clear();
    location.reload();
});

$("#botonCancela").click(function(){
    localStorage.clear();
    location.reload();
});

$("#elimina").click(function(){
    alert(`holaaaaaaa`);
})
/*PRECIO FINAL*/


