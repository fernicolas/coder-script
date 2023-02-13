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
    constructor(nombre, valor, stock) {
        this.nombre = nombre;
        this.valor = valor;
        this.stock = stock;
    }
    get_datos() {
        console.log("Producto:", this.nombre);
        console.log("Precio:", this.valor);
        console.log("Stock:", this.stock);
    }
    get_stock() {
        console.log("Quedan:", this.stock - unidades, "unidades")
    }
}
let lista_muebles = [];
let produ_escritorio = new Caracteristicas_muebles("Escritorio", 25000, 8);
lista_muebles.push(produ_escritorio);
let produ_ratona = new Caracteristicas_muebles("Mesa ratona", 10500, 12)
lista_muebles.push(produ_ratona);
let produ_juego = new Caracteristicas_muebles("Juego de living", 14500, 13)
lista_muebles.push(produ_juego);
let produ_rack = new Caracteristicas_muebles("Rack Tv", 22500, 18);
lista_muebles.push(produ_rack);



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
    alert("Gracias por visitarnos!!")
}



let precio_escritorio = muebles(lista_muebles[0].valor, usuario);
let precio_mesarat = muebles(lista_muebles[1].valor, usuario);
let precio_juego = muebles(lista_muebles[2].valor, usuario);
let precio_rack = muebles(lista_muebles[3].valor, usuario);



while (solicitar != "no") {
    if (elegir_producto == "1") {
        produ_escritorio.get_datos();
    } else if (elegir_producto == "2") {
        produ_ratona.get_datos();

    } else if (elegir_producto == "3") {
        produ_juego.get_datos();
    } else if (elegir_producto == "4") {
        produ_rack.get_datos();
    }
    break
}


let unidades = parseInt(prompt("¿Cuantas unidades quieres?:"));
let costo_total_escritorio = unidades * lista_muebles[0].valor;
let costo_total_ratona = unidades * lista_muebles[1].valor;
let costo_total_living = unidades * lista_muebles[2].valor;
let costo_total_rack = unidades * lista_muebles[3].valor;


if (unidades < produ_escritorio.stock && elegir_producto == "1" && usuario == "registrado") {
    console.log("Usted quiere:", unidades);
    console.log("El costo es de:", costo_total_escritorio)
    console.log("Tiene un descuento de:", precio_escritorio * unidades, "por estar registrado");
    console.log("Total a pagar:", costo_total_escritorio - (precio_escritorio * unidades));
    lista_muebles[0].get_stock()
} else if (unidades > produ_escritorio.stock && elegir_producto == "1") {
    console.log("No tenemos stock del producto");
} else if (usuario == "no registrado" && elegir_producto == "1") {
    console.log("Usted quiere:", unidades);
    console.log("No posee descuento")
    console.log("El costo es de:", costo_total_escritorio);
    lista_muebles[0].get_stock()
}


if (unidades < produ_ratona.stock && elegir_producto == "2" && usuario == "registrado") {
    console.log("Usted quiere:", unidades);
    console.log("El costo es de:", costo_total_ratona)
    console.log("Tiene un descuento de:", precio_mesarat * unidades, "por estar registrado");
    console.log("Total a pagar:", costo_total_ratona - (precio_mesarat * unidades));
    lista_muebles[1].get_stock()
} else if (unidades > produ_ratona.stock && elegir_producto == "2") {
    console.log("No tenemos stock del producto");
} else if (usuario == "no registrado" && elegir_producto == "2") {
    console.log("Usted quiere:", unidades);
    console.log("No posee descuento")
    console.log("El costo es de:", costo_total_ratona);
    lista_muebles[1].get_stock()
}


if (unidades < produ_juego.stock && elegir_producto == "3" && usuario == "registrado") {
    console.log("Usted quiere:", unidades);
    console.log("El costo es de:", costo_total_living)
    console.log("Tiene un descuento de:", precio_juego * unidades, "por estar registrado");
    console.log("Total a pagar:", costo_total_living - (precio_juego * unidades));
    lista_muebles[2].get_stock()
} else if (unidades > produ_juego.stock && elegir_producto == "3") {
    console.log("No tenemos stock del producto");
} else if (usuario == "no registrado" && elegir_producto == "3") {
    console.log("Usted quiere:", unidades);
    console.log("No posee descuento")
    console.log("El costo es de:", costo_total_living);
    lista_muebles[2].get_stock()
}


if (unidades < produ_rack.stock && elegir_producto == "4" && usuario == "registrado") {
    console.log("Usted quiere:", unidades);
    console.log("El costo es de:", costo_total_rack)
    console.log("Tiene un descuento de:", precio_rack * unidades, "por estar registrado");
    console.log("Total a pagar:", costo_total_rack - (precio_rack * unidades));
    lista_muebles[3].get_stock()
} else if (unidades > produ_rack.stock && elegir_producto == "4") {
    console.log("No tenemos stock del producto");
} else if (usuario == "no registrado" && elegir_producto == "4") {
    console.log("Usted quiere:", unidades);
    console.log("No posee descuento")
    console.log("El costo es de:", costo_total_rack);
    lista_muebles[3].get_stock()
}
