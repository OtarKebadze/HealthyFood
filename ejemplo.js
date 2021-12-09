let nombre= prompt('Porfavor ingresa tu nombre');
let apellido= prompt('Porfavor a continuacion, ingresa tu apellido');



alert (`Bienvenido a HealthyLife ${nombre} ${apellido}`);



class Compra {
    constructor (lista){
        this.lista=lista;
    }
    listaItems(){
        return this.lista;
    }
    findItemById(itemId){
        const item = this.lista.find ( element => element.id===itemId);
    if (!itemId){
        throw new Error ('No existe el item!!! '+ itemId);
    }
    return item;
    }
}

class Producto {
    constructor(id , nombre, precio , stock) {
        this.id = id;
        this.nombre=nombre;
        this.precio=precio;
        this.stock=stock;
    }
}

const producto1= new Producto(1 , 'ensalada cesar' , 55 , true);
const producto2= new Producto(2 , 'mix de hojas verdes' , 20 ,true);
const producto3= new Producto(3 , 'ensalada mixta pollo' , 70 , true);
const producto4= new Producto (4, 'ensalada mixta con lomito de atun' , 70 , true);
const producto5= new Producto (5, 'ensalada mixta con camarones', 85 , true);
const producto6= new Producto (6 ,'ensalada mixta con salmon' , 100 , true);
const producto7= new Producto (7,'ensalada tomate' , 40 , true);
const producto8= new Producto (8 ,'ensalada light ' , 60 , true);
const producto9= new Producto (9 ,'ensalada rusa' , 80 , true);
const producto10= new Producto (10 ,'ensalada waldorf' , 60 , true);

const nuestrosProductos= new Compra ( [producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8, producto9, producto10]);

console.log (nuestrosProductos.listaItems());

console.log (nuestrosProductos.findItemById(4));


console.log (typeof Compra);

const filtro = Compra.filter (elemento => elemento.includes('ensalada'));
console.log (filtro);


let ensalada = prompt ('Que ensalada desea comprar?');



if (ensalada===filtro){
    alert ( 'Gracias por tu compra' );
}else{
    alert ( 'el elemento seleccionado no existe' );
}




















