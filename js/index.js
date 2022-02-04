import {Carrito} from "./carrito.js";
import {Producto} from "./funcionProducto.js";
import {nuestrosProductos} from './productos.js'


/* Renderizo la lista*/

for ( let producto of nuestrosProductos){
    $('#listaProductos').append(`<li id="${producto.id}" class="productoNombre">${producto.nombre}</li><p id="precioProducto">$${producto.precio}</p>`);
    $(`#${producto.id}`).click(function(){
    let carrito=new Carrito;
    carrito.createItem(producto);
    const nuevoCarrito=JSON.parse(localStorage.getItem("compra"));
    ($("#tuCompra").append(`<li id="productoNombre">${producto.nombre}<input id="cantidad" type="number" min="1" value=1><button id="elimina" data-id="${producto.id}">X</button>`));
    for(let i = 0 ; i<nuevoCarrito.lenght; i++){
    let nuevoCarritoProducto= document.getElemebntById("productoNombre")
    if( producto.nombre == nuevoCarritoProducto.innerText){
    alert(`el item ${producto.nombre} ya existe en el carrito`)
    }}
    })
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


/*
verdadero = true;
    $('button#elimina').click(function(){
    verdadero = false;
    let idBoton = $(this).data('id');
    carrito.deleteItem(idBoton);
    $(this).parent().fadeOut(function () {
    $(this).remove();
        });
})
$('input#cantidad').change(function(){
    var cantidadProducto =$(this).val()*producto.precio;
    $("#totalCompra").append(`<p>$${cantidadProducto}</p>`)
});
$("input#cantidad").trigger("change")




$(`#${producto.id}`).click(function(){
    carrito.createItem(producto);
    const prods = JSON.parse(localStorage.getItem('carrito'))
    if( producto.id == prods.id ){
    ($("#tuCompra").append(`<li>${producto.nombre}<input id="cantidad" type="number" min="1" value=1><button id="elimina" data-id="${producto.id}">X</button>`));
    
} else {
    alert(`el item ${producto.nombre} ya existe en el carrito`)
*/