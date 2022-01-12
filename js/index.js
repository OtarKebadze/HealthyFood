import {Carrito} from "./carrito.js";
import {Producto} from "./funcionProducto.js";
import {nuestrosProductos} from './productos.js'



/* Creando carrito vacio*/
const carrito = new Carrito ();

const renderList = (listaId, lista) =>{
    
    const listaContainer= document.getElementById(listaId);

    for ( const item of lista){

        const itemList = document.createElement ('li')

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