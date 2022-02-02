export class Carrito {
    constructor() {
        this.lista = JSON.parse(localStorage.getItem('carrito')) || [];
    }
    listaItems() {
        return this.lista;
    }
    createItem(item) {
        /*Reviso si existe el item*/ 
        const itemExists = this.lista.find((prod)=> prod.id=== item.id);
        /* si no existe , agregamos el nuevo*/ 
        if(!itemExists){
        this.lista.push(item);
        }else {
        this.lista.map((prod)=>{
        if (prod.id=== item.id){
            prod.cant++;
        }
        return prod
        })
        }
        /* Guardo en locaLStorage*/
        localStorage.setItem("compra",JSON.stringify(this.lista));
    }
    findItemById(itemId) {
        const item = this.lista.find(element => element.id === itemId);
        if (!itemId) {
            throw new Error('No existe el item!!! ' + itemId);
        }
        return item;
    }
    deleteItem(itemId) {
        const item = this.findItemById(itemId);
        const index = this.lista.indexOf(item);
        this.lista.splice(index, 1);
        localStorage.setItem("compra", JSON.stringify(this.lista))
    }
}
