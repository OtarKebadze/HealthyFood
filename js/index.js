import {Carrito} from "./carrito.js";
import {Producto} from "./funcionProducto.js";
import {nuestrosProductos} from './productos.js'


/* Renderizo la lista*/

for ( let producto of nuestrosProductos){
    //Crea los elementos en el dom para asi poder interactuar con ellos
    $('#listaProductos').append(`<li id="${producto.id}" class="productoNombre">${producto.nombre}</li><p id="precioProducto">$${producto.precio}</p>`);
    //Evento de click
    $(`#${producto.id}`).click(function(){
    //Crea un carrito vacio
        let carrito=new Carrito;
    carrito.createItem(producto);
    //Recupera datos de carrito y los guarda en una nueva variable
    const nuevoCarrito=JSON.parse(localStorage.getItem("compra"));
    //Pasa los elementos al carrito del dom
    ($("#tuCompra").append(`<li id="productoNombre">${producto.nombre}<input id="cantidad" type="number" min="1" value=1><button id="elimina" data-id="${producto.id}">X</button><p id="precioProducto2">$${producto.precio}</p>`));
    //Boton para eliminar los productos del DOM y del LS
    $('button#elimina').click(function(){
    let idBoton = $(this).data('id');
    carrito.deleteItem(idBoton);
    $(this).parent().fadeOut(function () {
    $(this).remove();
    });
    })
    // Toma valor input y calcula precio
    $('input#cantidad').change(function(){
    let cantidadProducto =$(this).val();
    let precioTotal = cantidadProducto * producto.precio;
    $("precioProducto2").append(precioTotal)
    });
    $("input#cantidad").trigger("change")
    //Recorre LS y no deja que se repita el producto
    for(let i = 0 ; i<nuevoCarrito.lenght; i++){
    let nuevoCarritoProducto = document.getElemebntById("productoNombre")
    if( producto.nombre == nuevoCarritoProducto.innerText){
    alert(`el item ${producto.nombre} ya existe en el carrito`)
    return
    }}
    })
    
    }

/*Botones extra*/
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

$(`#${producto.id}`).click(function(){
    carrito.createItem(producto);
    const prods = JSON.parse(localStorage.getItem('carrito'))
    if( producto.id == prods.id ){
    ($("#tuCompra").append(`<li>${producto.nombre}<input id="cantidad" type="number" min="1" value=1><button id="elimina" data-id="${producto.id}">X</button>`));
    
} else {
    alert(`el item ${producto.nombre} ya existe en el carrito`)
*/