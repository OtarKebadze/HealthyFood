import {Carrito} from "./carrito.js";
import {Producto} from "./funcionProducto.js";
import {nuestrosProductos} from './productos.js'



/* Creando carrito vacio*/
const carrito = new Carrito ();


/* Renderizo la lista*/


for ( let producto of nuestrosProductos){
    $('#listaProductos').append(`<li id="${producto.id}" class="productoNombre">${producto.nombre}</li><p id="precioProducto">$${producto.precio}</p>`);
    $(`#${producto.id}`).click(function(){
    carrito.createItem(producto);
    let nombreEnsalada = document.getElementsByClassName("compra__contenido");
    if( producto.nombre !== nombreEnsalada.innerText){
    ($("#tuCompra").append(`<li>${producto.nombre}<input id="cantidad" type="number" value=${producto.cant}><button id="elimina">Eliminar</button>`));
    }else{
    alert(`el item ${producto.nombre} ya existe en el carrito`)
    }
})
}
/*Botones UP y DOWN Input*/
$("#cantidad").on("keyup",function(){
    alert("hola")
});
$("#cantidad").on("keydown",function(){
    alert("hola2")
});

/*Botones*/
$("#botonCompra").click(function(){
    alert( `Gracias por su Compra!`)
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

