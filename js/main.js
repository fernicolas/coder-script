function muebles(precio, usuario) {
    if (usuario == "registrado") {
        let costo_mueble = precio * 0.25;
        return costo_mueble;
    }
    else if (usuario == "no registrado") {
        let costo_mueble_not = precio;
        return costo_mueble_not;
    }
}

class Caracteristicas_muebles {
    constructor(categoria, nombre, valor, stock) {
        this.categoria = categoria;
        this.nombre = nombre;
        this.valor = valor;
        this.stock = stock;
    }
    get_datos() {
        console.log("Categoria:", this.categoria);
        console.log("Producto:", this.nombre);
        console.log("Precio:", this.valor);
        console.log("Stock:", this.stock);
    }
    get_stock() {
        console.log("Quedan:", this.stock - unidades, "unidades")
    }
}
let lista_muebles = [];

lista_muebles.push(new Caracteristicas_muebles(1, "Escritorio", 25000, 8));
lista_muebles.push(new Caracteristicas_muebles(2, "Mesa ratona", 10500, 12));
lista_muebles.push(new Caracteristicas_muebles(3, "Juego de living", 14500, 13))
lista_muebles.push(new Caracteristicas_muebles(4, "Rack Tv", 22500, 18));


console.log("Bienvenido a IronSpot")
let usuario = prompt("Bienvenido a IronSpot ¿Estas registrado(registrado, no registrado)? Si lo estas obtenes un 25% de descuento en la compra.");

while (usuario != "registrado" && usuario != "no registrado") {
    alert("¡No válido!");
    usuario = prompt("Ingrese si esta registrado:");
}

let solicitar = prompt("¿Desea realizar alguna compra?(si o no)");
let elegir_producto
while (solicitar != "si" && solicitar != "no") {
    alert("Ingrese si o no");
    solicitar = prompt("¿Desea realizar alguna compra?(si o no)");
}

if (solicitar == "si") {
    elegir_producto = parseInt(prompt("Elija el producto que desea(numero): 1)-Escritorio - 2)-Mesa ratona - 3)-Juego de living - 4)-Rack Tv:"));
} else if (solicitar == "no") {
    alert("Gracias por visitarnos!!");
}

while (solicitar != "no") {
    if (elegir_producto == "1" || elegir_producto == "2" || elegir_producto == "3" || elegir_producto == "4") {
        producto_elegido = lista_muebles.find(function (prod) { return prod.categoria == elegir_producto });
        producto_elegido.get_datos();
        unidades = parseInt(prompt("¿Cuantas unidades quieres?:"));
        descuento = muebles(producto_elegido.valor, usuario) * unidades;
    } break
}
let costo_total = producto_elegido.valor * unidades;
let costo_final = costo_total - descuento;

if (unidades < producto_elegido.stock && usuario == "registrado" || elegir_producto == "1" && elegir_producto == "2" && elegir_producto == "3" && elegir_producto == "4") {
    console.log("Usted quiere:", unidades, "unidades");
    console.log("El costo total es de:", costo_total)
    console.log("Tiene un descuento de:", descuento, "por estar registrado.");
    console.log("Total a pagar con descuento es:", costo_final)
    producto_elegido.get_stock();

} else if (unidades > producto_elegido.stock) {
    console.log("No se puede hacer la compra. No contamos con la cantidad solicitada.");
} else if (usuario == "no registrado") {
    console.log("El costo total es de:", costo_total)
    console.log("No posee descuento.")
}
