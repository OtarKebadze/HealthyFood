import {Carrito} from "./carrito.js";
import {Producto} from "./funcionProducto.js";
import {nuestrosProductos} from './productos.js'



/* Creando carrito vacio*/
const carrito = new Carrito ();


for ( const producto of nuestrosProductos){
    $('#productos__contenido').append(`<li id="${producto.id}">${producto.nombre} </li>`);
    $(`#${producto.id}`).click(function(){
    ($("#tuCompra").append(`<li>${producto.nombre}</li>`));
    })
};

$("#botonCompra").click(function(){
    alert (`Gracias por realizar su compra`);
    });

<<<<<<< HEAD
        itemList.innerText = item.nombre
        
        listaContainer.appendChild(itemList)
        itemList.addEventListener('click', function (){
            console.log(item.nombre)
            carrito.createItem (item)
            })
    }
};
renderList('listaProductos', nuestrosProductos);



const botonComprar = document.getElementById ('botonCompra')
botonComprar.addEventListener ('click', function(){
alert (`Gracias por realizar su compra`)});
=======
    $("#botonCancela").click(function(){
    alert("vacio la lista");
    });
>>>>>>> jquery
