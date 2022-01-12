import {Carrito} from "./carrito.js";
import {Producto} from "./funcionProducto.js";
import {nuestrosProductos} from './productos.js'



/* Creando carrito vacio*/
const carrito = new Carrito ();

for ( const producto of productos){
    $("#principal__compra").append("<p>${item.name}</p>")
}


const botonComprar = document.getElementById ('botonCompra')
botonComprar.addEventListener ('click', function(){
alert (`Gracias por realizar su compra`)})