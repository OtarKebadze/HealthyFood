import {Carrito} from "./carrito.js";
import {nuestrosProductos} from './productos.js'


const carrito = new Carrito();

//Etiquetas html a utilizar
const itemsProduct = (item)=>{
    return `<li id="${item.id}" class="productoNombre">${item.nombre}</li><p id="precioProducto">$${item.precio}</p>`
}
const itemsCarrito = (item)=>{
    return`<li id="productoNombre">${item.nombre}<input id="cantidad" type="number" min="1" value=1><button id="elimina" data-id="${item.id}">X</button><p id="precioProducto2">$${item.precio}</p>`
}


// Funciones a utilizar
function renderList(){
nuestrosProductos.foreach((item)=>{
$("#principalProductos").append(itemsProduct)
});
}

renderList();

function renderCarrito(){

}
function renderTotal(){

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
