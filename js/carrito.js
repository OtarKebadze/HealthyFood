export class Carrito {
    constructor() {
        this.lista = JSON.parse(localStorage.getItem("compra")) || [];
        this.total=0;
        this.cantidad=0;
    }

    listaItems() {
        return this.lista;
    }

    findItem(ide){
        const id = Number(ide);
        return this.lista.some( (item) => item.id === id);
    }

    addItem(id){
    const item = nuestrosProductos.find( (item) => item.id === Number(id));
    if (item){
    const newItem = Object.assign ( item , {canti:1})
    this.lista.push(newItem)
    }
    this.updateChanges();
    }

    deleteItem(id) {
    let newCartItems= this.lista.filter((item)=> item.id !== Number(id) )
    this.updateChanges(newCartItems)
    }

    updateItemCant(id, cant) {
        let cartItems = this.lista.map((item) => {
        let newCant = item.cant;
        if (item.id === Number(id)) {
            if (cant >= 1 && cant <= item.stock) {
        newCant = Number(cant);
            }
        }
        return {...item, cant: newCant };
        });
        this.updateChanges(cartItems);
    }

    updateChanges(newList = []){
        this.lista = newList || this.lista;
        this.calculateTotal();
        localStorage.setItem("compra", JSON.stringify(this.lista));
    }

    calculateTotal() {
    let totalPrice=0;
    this.lista.forEach((item)=>{
    totalPrice += item.cant * item.precio;
    totalCant += item.cant;
    });
    this.total= totalPrice;
    }
}
