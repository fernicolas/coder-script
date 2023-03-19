
async function traer_productos() {
    const respuesta = await fetch("data/productos.json");
    const info = await respuesta.json();
    return info;
}

//-----------------------------RENDER PRODUCTOS------------------------//

const contenedor_productos = document.getElementById("productos");

traer_productos().then((productos) => {
    productos.forEach((producto) => {
        contenedor_productos.innerHTML += `
        <div class="productos_card">
        <img src="${producto.img}" class=" img-fluid img_producto">
            <div>
                <h4 class="cat_producto">${producto.categoria}</h4>
                    <h5 class="name_producto">${producto.nombre}</h5>
                    <h5 class="valor_produ">${producto.precio}$</h5>
                    <button class="btn_agregar btn btn-success">¡Lo quiero!</button>
            </div>
            </div>`
    })

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    let boton_agregar = document.querySelectorAll(".btn_agregar");
    for (let boton of boton_agregar) {
        boton.addEventListener("click", agregar_producto);
    }

    //--------------------------AGREGAR AL CARRITO----------------------------//
    function agregar_producto(e) {
        let agregar = e.target;
        let categoria_producto = agregar.parentElement.querySelector(".cat_producto").textContent;
        let nombre_producto = agregar.parentElement.querySelector(".name_producto").textContent;
        let valor_producto = agregar.parentElement.querySelector(".valor_produ").textContent;
        let imagen_producto = agregar.parentElement.parentElement.querySelector("img").src;
        let producto_elegido = { categoria: categoria_producto, nombre: nombre_producto, valor: valor_producto, img: imagen_producto, cantidad: 1 };
        const producto_en_carrito = carrito.find(item => item.categoria === producto_elegido.categoria);

        if (producto_en_carrito) {
            producto_en_carrito.cantidad++;
        } else {
            carrito.push(producto_elegido);
        }
        mostrar_notificacion("Producto agregado")
        guardar_carrito();
        actualizar_cantidad_carrito();
    }
    //------------------------------- MOSTRAR CARRRITO-------------------------//
    const imagen_carrito = document.getElementById("btn_abrir_carrito");
    imagen_carrito.addEventListener("click", carrito_abrir);

    function carrito_abrir() {
        let tabla = document.getElementById("carrito");
        tabla.innerHTML = "";
        for (let producto of carrito) {
            let fila = document.createElement("tr");
            fila.innerHTML = `<tr class="carrito"><div class="carrito_productos">
            <td><img src="${producto.img}" width="100px"></td>
            <td><p>${producto.nombre}</p></td>
            <td><span class="unidades">Cantidad: ${producto.cantidad}</span></td>
            <td><span>Precio: ${producto.valor} </span></td >
            <td><button class="btn btn-danger eliminar_producto">X</button></td>
            </div></tr>`;
            tabla.append(fila);
            carrito_total()
            actualizar_cantidad_carrito();

        }
        let btn_eliminar = document.querySelectorAll(".eliminar_producto");
        for (let boton of btn_eliminar) {
            boton.addEventListener("click", borrar_elemento);
        }
    }

    function guardar_carrito() {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
    function mostrar_notificacion(texto) {
        Toastify({
            text: texto,
            duration: 900,
            gravity: "bottom",
            position: "left",
            style: {
                borderRadius: "20px",
                fontSize: "15px",
                background: "black",
                color: "white",
            },
        }).showToast();
    }
    function actualizar_cantidad_carrito() {
        let contador_carrito = document.getElementById("cantidad_carrito");
        contador_carrito.innerText = carrito.length;
        localStorage.setItem("carrito_largo", carrito.length);
    }


    //--------------------------TOTAL CARRITO-----------------------//
    function carrito_total() {
        const precio_total = document.getElementById("total_precio_carrito");
        let total_a_pagar = 0;
        carrito.forEach((producto) => {
            const precio = parseInt(producto.valor);
            const cantidad = parseInt(producto.cantidad);
            total_a_pagar += precio * cantidad;
        });
        precio_total.innerHTML = `<span>Total a pagar: $${total_a_pagar}</span>`;
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
    //----------------------------BORRAR PRODUCTO DEL CARRITO---------------------//
    function borrar_elemento(e) {
        let abuelo = e.target.parentNode.parentNode;
        let producto_eliminar = abuelo.querySelector("p").textContent;
        function eliminar_producto(producto) {
            return producto.nombre != producto_eliminar
        }
        let carrito_menos = carrito.filter(eliminar_producto);
        carrito = carrito_menos;
        carrito_abrir();
        Toastify({
            text: "Producto eliminado",
            duration: 900,
            gravity: "bottom",
            position: "left",
            style: {
                borderRadius: "20px",
                fontSize: "15px",
                background: "red",
                color: "black",
            }
        }).showToast();
    }


    let btn_comprar = document.getElementById("btn_compra");
    btn_comprar.addEventListener("click", comprar)


    function comprar() {
        let total_compra = parseFloat(document.getElementById("total_precio_carrito").textContent.replace("$", ""));
        if (total_compra > 0) {
            carrito = []

            Swal.fire({
                title: 'Confirmar compra',
                text: '¿Está seguro de que desea realizar la compra?',
                icon: 'question',
                confirmButtonText: 'Sí, comprar',
                cancelButtonText: 'Cancelar',
                showCancelButton: true,
                reverseButtons: true,
                showClass: {
                    popup: 'animate__animated animate__headShake'
                },
                hideClass: {
                    popup: 'animate__animated animate__backOutDown'
                },
                background: "black",
                color: "white",
            })
        } else {
            Swal.fire({
                icon: "error",
                text: 'Carrito vacío',
                confirmButtonText: 'Volver',
                showClass: {
                    popup: 'animate__animated animate__headShake'
                },
                hideClass: {
                    popup: 'animate__animated animate__backOutDown'
                },
                background: "black",
            })
        }

    }
})




