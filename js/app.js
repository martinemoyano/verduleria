let carritoCompras = []

const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('contenedor-carrito');

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

const buscador = document.getElementById('search');






function mostrarProductos(){
stockProductos.forEach(item=>{
    let div = document.createElement('div')
    div.className = 'producto'
    div.innerHTML = ` <div class="card" style="width: 16rem;">
                     <img src="${item.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="nombreItem">${item.nombre}</h5>
                    <p class="precioItem">$${item.precio}</p>
                    <a "id=botonAgregar${item.id}" class="btn btn-primary">Agregar</a>
                   </div>
                   </div>`

contenedorProductos.appendChild(div);
let btnAgregar = document.getElementById('botonAgregar${item.id}')
// btnAgregar.addEventListener('click',()=>{
    // agregarAlCarrito(item.id);
// })
})
}
mostrarProductos()


function agregarAlCarrito(id) {
let existe = carritoCompras.find(producto => producto.id == id)
if (existe){
    existe.cantidad = existe.cantidad +1
    document.getElementById('cant${existe.id}').innerHTML = `<p id = "cant${existe.id}">cantidad:${existe.cantidad}</p>`
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
    div.setAttribute('class', 'productoEnCarrito')
    div.innerHTML += `<p>${productoAgregar.nombre}</p>
                    <p>Precio: $${productoAgregar.precio}</p>
                    <p id="cant${productoAgregar.id}">cantidad:${productoAgregar.cantidad}</p>
                    <button class="boton-eliminar" id="${productoAgregar.id}">
                    <i class="fas fa-trash-alt"></i>
                    </button>`
    contenedorCarrito.appendChild(div)}


