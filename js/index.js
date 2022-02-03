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
    ($("#tuCompra").append(`<li>${producto.nombre}<input id="cantidad" type="number" min="1" value=1><button id="elimina" data-id="${producto.id}">Eliminar</button>`));
    verdadero = true;
$('button#elimina').click(function(){
    verdadero = false;
    let idBoton = $(this).data('id');
    carrito.deleteItem(idBoton);
    $(this).parent().fadeOut(function () {
    $(this).remove();
        });
})
} else {
    alert(`el item ${producto.nombre} ya existe en el carrito`)
}
});
}


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


$(document).delegate("button#elimina","click",function(){
    var idBoton =$(this).data('id');
    carrito.deleteItem(idBoton);
    $(this).parent().fadeOut(function(){
        $(this).remove();
        verdadero=false;
    })
});


/*PRECIO FINAL*/
for ( let prod of nuestrosProductos){
    let prodCant= document.getElementById("cantidad")
    let cantidad=prodCant.value
    let precio = prod.precio
    let precioFinal= precio* parseInt(cantidad)
    $("#totalCompra").append(`<p>$${precioFinal}</p>`)
}

