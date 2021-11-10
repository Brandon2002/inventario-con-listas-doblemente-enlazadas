
export default class Inventario{

    constructor(){
        this._inicio = null;
        this._ultimo = null;
    }

    añadir(producto){
        let v = this._buscar(producto.getCod());

        if (v != null) {
            return null;
        }
        if(this._inicio == null){
            this._inicio = producto
        }else{
            let prod = this._inicio
            while(prod._next != null) {
                prod = prod._next;
            }
            prod._next = producto
            prod._next._anterior = prod;
        }

        // let detalles = document.getElementById('productosHtml');
        // detalles.innerHTML += producto.listarProd();
    }


    buscar(id){

        let temp = this._inicio;

        while(temp!=null){
            if(temp.getCod()==id) {
                let detalles = document.getElementById('buscar');
                detalles.innerHTML +='se encontró: ' + temp.listarProd();
            return temp;
            }
            temp=temp._next;
        }
        let detalles = document.getElementById('buscar');
        detalles.innerHTML += 'Este producto no existe en el inventario';
        return null;
    }

    _buscar(id){

        let temp = this._inicio;

        while(temp!=null){
            if(temp.getCod()==id) {
            return temp;
            }
            temp=temp._next;
        }
        return null;
    }

    eliminar(id){
        let e = null;
        if(id === this._inicio.getCod()){
            e = this._inicio;
            this._inicio = this._inicio._next;
            e._next = null;
            this._inicio._anterior = null;
            let detalles = document.getElementById('elim');
            detalles.innerHTML +='Se eliminó: ' + e.listarProd();
            return e;
        }
        let aux = this._inicio;
        while(aux._next != null && e === null){
            if(aux._next.getCod() === id){
                e = aux._next;
                aux._next = aux._next._next;
                e._next = null;
                aux._next._anterior = aux;
                let detalles = document.getElementById('elim');
                detalles.innerHTML +='Se eliminó: ' + e.listarProd();
            }else{
                aux = aux._next;
            }
            
        }
        let detalles = document.getElementById('elim');
        detalles.innerHTML +='No se pudo eliminar'
        return e;
        
        

    }

    listar(){
        let prod = this._inicio;

        let list = prod.listarProd();
            while(prod._next != null){
                prod = prod._next;
                list = list + prod.listarProd();
            }
           



            return list;

        
    }

    listarConsole() {
        return this._inicio;
    }

    getList() {
        let list = [];
        let current = this._inicio;
        while (current) {
            list.push(current);
            current = current._next;
        }
        return list;
    }

}