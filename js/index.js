import {Carrito} from "./carrito.js";
import {Producto} from "./funcionProducto.js";
import {nuestrosProductos} from './productos.js'



/* Creando carrito vacio*/
const carrito = new Carrito ();

console.log(carrito.listaItems());

/* Renderizo la lista*/
for ( const producto of nuestrosProductos){
    $('#listaProductos').append(`<li id="${producto.id}" class="productoNombre">${producto.nombre}</li><p id="precioProducto">$${producto.precio}</p>`);
    $(`#${producto.id}`).click(function(){
    const nombreEnsalada = document.getElementsByClassName("productoNombre")
    if( nombreEnsalada.innerText == producto.nombre){
        alert(`${producto.nombre} ya se encuentra en el carrito`)
        return
    }else{
    ($("#tuCompra").append(`<li>${producto.nombre}<input id="cantidad" type="number" value=1> <button id="elimina">Eliminar`));
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
for (const preciosProductos of nuestrosProductos){
    precio = preciosProductos.precio;
    cantidadProducto = document.getElementById("cantidad");
    cantidad= cantidadProducto.value;
    precioTotal= precioProducto * cantidad;
    $("#totalCompra").append(`<p id='titulo'> ${precioTotal}} </p>`)
}
