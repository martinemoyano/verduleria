let carritoCompras = []

const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precio-total');

const buscador = document.getElementById('search');




mostrarProductos(stockProductos)

function mostrarProductos(){
stockProductos.forEach(item=>{
    let div = document.createElement('div')
    div.className = 'producto'
    div.innerHTML = ` <div class="card" style="width: 16rem;">
                     <img src="${item.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="nombreItem">${item.nombre}</h5>
                    <p class="precioItem">$${item.precio}</p>
                    <a id="botonAgregar${item.id}" class="btn btn-primary">Agregar</a>
                   </div>
                   </div>`

contenedorProductos.appendChild(div);
let btnAgregar = document.getElementById(`botonAgregar${item.id}`)
btnAgregar.addEventListener('click',()=>{
    agregarAlCarrito(item.id);
})
})
}


function agregarAlCarrito(id) {
let existe = carritoCompras.find(producto => producto.id == id)
if (existe){
    existe.cantidad = existe.cantidad +1
    document.getElementById(`cant${existe.id}`).innerHTML = `<p id = "cant${existe.id}">cantidad:${existe.cantidad}</p>`
    actualizarCarrito()
}else{
        let productoAgregar = stockProductos.find(item=> item.id == id)
        productoAgregar.cantidad = 1
        carritoCompras.push(productoAgregar);
        mostrarCarrito(productoAgregar)
        actualizarCarrito()
    }
}



function mostrarCarrito(productoAgregar) {
    let div = document.createElement('div')
    div.className="productoEnCarrito";
    div.innerHTML += `<p>${productoAgregar.nombre}</p>
                      <p>Precio: $${productoAgregar.precio}</p>
                      <p id="cant${productoAgregar.id}">cantidad:${productoAgregar.cantidad}</p>
                      <button class="boton-eliminar btn btn-primary" id="eliminar${productoAgregar.id}">
                     borrar</i>
                      </button>`
    contenedorCarrito.appendChild(div)

   let btnEliminar = document.getElementById(`eliminar${productoAgregar.id}`)
   btnEliminar.addEventListener('click',()=>{
       if(productoAgregar.cantidad == 1){
           carritoCompras = carritoCompras.filter(item=>item.id !== productoAgregar.id)
           btnEliminar.parentElement.remove()
           actualizarCarrito()
       }else{
        productoAgregar.cantidad = productoAgregar.cantidad - 1
        document.getElementById(`cant${productoAgregar.id}`).innerHTML = `<p id = "cant${productoAgregar.id}">cantidad:${productoAgregar.cantidad}</p>`
        actualizarCarrito()

       }
    //    carritoCompras = carritoCompras.filter(item =>item.id !==productoAgregar.id); 
    //    btnEliminar.parentElement.remove(); 
    //    actualizarCarrito()
   })
}


    function actualizarCarrito(){
        contadorCarrito.innerText = carritoCompras.length
        precioTotal.innerText = carritoCompras.reduce((acc,el)=>acc + (el.precio * el.cantidad),0)
    }
    

// function eliminar()
// let btnEliminar = document.getElementsByClassName('boton-eliminar')
// for (const btn of btnEliminar){
//     btn.addEventListener('click',()=>{
//         btn.parentElement.remove();
//         carritoCompras = carritoCompras.filter(item => item.id != e.target.parentElement.id)
//         actualizarCarrito()
//     })
// }

function  actualizarCarrito (){
    contadorCarrito.innerText= carritoCompras.reduce((acc,el)=> acc + el.cantidad, 0)            
    precioTotal.innerText = carritoCompras.reduce((acc,el)=> acc + (el.precio * el.cantidad), 0)
 }    

console.log(contenedorCarrito)
console.log(carritoCompras)