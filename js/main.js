
class Caracteristicas_muebles {
    constructor(categoria, nombre, valor, img) {
        this.categoria = categoria;
        this.nombre = nombre;
        this.valor = valor;
        this.img = img;
    }
}
let lista_muebles = [];

lista_muebles.push(new Caracteristicas_muebles(1, "Escritorio", 25000, "./imagenes/escritorio.webp"));
lista_muebles.push(new Caracteristicas_muebles(2, "Mesa ratona", 10500, "./imagenes/ratona.webp"));
lista_muebles.push(new Caracteristicas_muebles(3, "Juego", 14500, "./imagenes/juegoliving.jpg"))
lista_muebles.push(new Caracteristicas_muebles(4, "Rack Tv", 22500, "./imagenes/rack.webp"));

let contenedor_productos = document.getElementById('productos')

function render_productos(producto) {
    let articulo = document.createElement('div');
    articulo.innerHTML = `
                                <img src="${producto.img}" class=" img-fluid img_producto">
                                    <div class="div_main">
                                        <h4 class="cat_producto">${producto.categoria}</h4>
                                            <h5 class="name_producto">${producto.nombre}</h5>
                                            <h5 class="valor_produ">${producto.valor}$</h5>
                                            <button class="btn_agregar btn btn-success">¡Lo quiero!</button>
                                    </div>
                            `
    contenedor_productos.append(articulo)
}

lista_muebles.forEach(render_productos);

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const guardado_storage = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function agregar_producto(e) {
    let agregar = e.target;
    let categoria_producto = agregar.parentElement.querySelector(".cat_producto").textContent;
    let nombre_producto = agregar.parentElement.querySelector(".name_producto").textContent;
    let valor_producto = agregar.parentElement.querySelector(".valor_produ").textContent;
    let imagen_producto = agregar.parentElement.parentElement.querySelector("img").src;

    let producto_elegido = { categoria: categoria_producto, nombre: nombre_producto, valor: valor_producto, img: imagen_producto, cantidad: 1 };
    carrito.push(producto_elegido);
    mostrar_carrito();
    guardado_storage();
}
let btn_agregar = document.querySelectorAll(".btn_agregar");
console.log(btn_agregar)

for (let boton of btn_agregar) {
    boton.addEventListener("click", agregar_producto)
}

function mostrar_carrito() {
    let tabla = document.getElementById("carrito");
    tabla.innerHTML = "";
    for (let producto_elegido of carrito) {
        let fila = document.createElement("tr");
        fila.innerHTML = `<div class="carrito_productos"><td><img src="${producto_elegido.img}" width="100px"></td>
                            <td><p>${producto_elegido.nombre}</p></td>
                            <td><span>Cantidad </span>${producto_elegido.cantidad}</td>
                            <td><span>Precio </span>${producto_elegido.valor}</td>
                            <td><button class="btn btn-danger eliminar_producto">X</button></td>
                            </div>`
        tabla.append(fila)

    }
    let btn_eliminar = document.querySelectorAll(".eliminar_producto");
    for (let boton of btn_eliminar) {
        boton.addEventListener("click", borrar_elemento);
    }
}


function borrar_elemento(e) {
    let borrar = e.target.parentElement.parentElement;
    let producto_a_eliminar = borrar.querySelector("p").textContent;

    function borrar_produ(elemento) {
        return elemento.nombre != producto_a_eliminar;
    }

    let elemento_borrado = carrito.filter(borrar_produ);
    carrito = elemento_borrado;
    mostrar_carrito()
}






