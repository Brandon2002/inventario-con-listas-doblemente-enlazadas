import Inventario from './inventario.js';
import Product from './product.js'
let max = 0;
/*let p1 = new Product(1, 'Leche', 2, 30);
let p2 = new Product(2, 'lala', 2, 15);
let p3 = new Product(4, 'Salsa', 1, 20);



in1.añadir(p1);
in1.añadir(p2);
in1.añadir(p3);
in1.eliminar(p1);

console.log(in1.listar());*/
let in1 = new Inventario();


//Nueva parte

const btnAdd = document.getElementById('btnAdd');
btnAdd.addEventListener('click',()=>{
    let labId = document.getElementById('code');
    let labNombre = document.getElementById('name');
    let labCantidad = document.getElementById('quantity');
    let labCosto = document.getElementById('cost');

    let id = Number(labId.value);
    let nombre = labNombre.value;
    let costo = Number(labCosto.value);
    let cantidad = Number(labCantidad.value);

    if(id && nombre && cantidad && costo && max < 20){
        labId.value = '';
        labNombre.value = '';
        labCantidad.value = '';
        labCosto.value = '';

        let producto = new Product(id, nombre, cantidad, costo);
        in1.añadir(producto);
        listarHtml(in1.getList());
        max++;
        
    }

    console.log(in1.listarConsole());
});

const btnB = document.getElementById('btnB');
btnB.addEventListener('click',()=>{
    let labId = document.getElementById('code');

    let id = Number(labId.value);

    if(id){
        labId.value = '';
    
        let producto = id;
        in1.buscar(producto);
        
    }
    console.log(in1.listarConsole());
});

const btnE = document.getElementById('btnE');
btnE.addEventListener('click',()=>{
    let labId = document.getElementById('code');
    
    let id = Number(labId.value);
    
    if(id){
        labId.value = '';
        
        let producto = id;
        in1.eliminar(producto);
            
    }
    console.log(in1.listarConsole());
    listarHtml(in1.getList());
    });

const btnR = document.getElementById('btnR');
btnR.addEventListener('click',()=>{

    listarHtml(in1.getList());

});

const btnRI = document.getElementById('btnRI');
btnRI.addEventListener('click',()=>{
    
    listarHtmlReversed(in1.getList());

});

const listarHtml = (products) => {

    deleteHtmlList();
    let block_to_insert;
    let container_block;
     
    products.forEach(element => {
            block_to_insert = document.createElement( 'div' );
            block_to_insert.classList.add("listaHtml");
            block_to_insert.innerHTML = `${element.listarProd()}`;
             
            container_block = document.getElementById('productosHtml');

            container_block.appendChild(block_to_insert);

    });
}

const listarHtmlReversed = (products) => {

    deleteHtmlList();
    let block_to_insert;
    let container_block;
     
    products.forEach(element => {
            block_to_insert = document.createElement( 'div' );
            block_to_insert.classList.add("listaHtml");
            block_to_insert.innerHTML = `${element.listarProd()}`;
             
            container_block = document.getElementById('productosHtml');
            
            container_block.prepend(block_to_insert);
    });
}

const deleteHtmlList = () => {
    const elements = document.getElementsByClassName('listaHtml');
    while(elements.length > 0){
    elements[0].parentNode.removeChild(elements[0]);
    }
}


    
