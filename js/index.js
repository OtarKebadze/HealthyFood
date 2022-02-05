import {Carrito} from "./carrito.js";
import {nuestrosProductos} from './productos.js'


const carrito = new Carrito();

//Etiquetas html a utilizar
const itemsProduct = (item)=>{
    return `<li id="${item.id}" class="productoNombre">${item.nombre}</li><p id="precioProducto" data-id="${item.id}">$${item.precio}</p>`
}
const itemsCarrito = (item)=>{
    return`<li id="productoNombre">${item.nombre}<input id="cantidad" type="number" min="1" value=1><button id="elimina" data-id="${item.id}">X</button><p id="precioProducto2">$${item.precio}</p>`
}


// Funciones a utilizar
function renderList(){
nuestrosProductos.forEach((item)=>{
$("#principalProductos").append(itemsProduct(item))
});
};

renderList();

function updateCarrito(){
    carrito.updateChanges();
    renderCarrito()
    renderTotal();
};

updateCarrito();

function renderTotal(){
$("#totalCompra").html(`${carrito.total}`)
}

renderTotal();

function renderCarrito(){
    $("#tuCompra").empty();
    carrito.listaItems().forEach((item)=>{
    $("#tuCompra").append(itemsCarrito(item));
    });
    }

//Eventos
//Boton para agregar a Carrito del HTML
$("#productosContenido").on("click",".productoNombre",function(){
    const idProd = $(this).attr("data-id");
    if (carrito.findItem(idProd)){
    alert(" Este producto se encuentra en el carrito")
    }else{
    carrito.addItem(idProd)
    }
    updateCarrito();
});

//Eliminar un objeto Carrito
$("#tuCompra").on("click", "button#elimina", function(){
const idProd = $(this).attr("data-id");
carrito.deleteItem(idProd);
updateCarrito();
})
//Tomar cantidad del input
$("tuCompra").on("change", "input#cantidad", function(){
const idProd = $(this).attr("data-id");
const cant= $(this).value;
carrito.updateItemCant(idProd,cant);
updateCarrito();
})

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
