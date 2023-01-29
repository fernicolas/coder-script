function seguro_auto(precio, usuario) {
    if (usuario == "registrado") {
        let costo_socio = precio * 0.10;
        return costo_socio
    }
    else if (usuario == "no registrado") {
        let costo_nosocio = precio
        return costo_nosocio
    }
}
console.log("Bienvenido a GIGASEGUROS")
let usuario = prompt("Bienvenido a GIGASEGUROS ¿Estas registrado (registrado , no registrado)? Si lo estás tenés un 10% de descuento.")

while (usuario != "registrado" && usuario != "no registrado") {
    alert("No valido");
    let usuario = prompt("¿Estas registrado (registrado , no registrado)? Si lo estás tenés un 10% de descuento.");
}


let carrito = prompt("Elija el tipo de seguro que desea: A (daños a terceros) , B (daños a terceros + robo total) ,  C (todo riesgo + destruccion total), Para finalizar escriba terminar");

let precio_seguro_a = 2000
let precio_seguro_b = 5000
let precio_seguro_c = 10000

let precio_total_a = seguro_auto(2000, usuario);
let precio_total_b = seguro_auto(5000, usuario);
let precio_total_c = seguro_auto(10000, usuario);



if (carrito == "a" && usuario == "registrado") {
    console.log("Contrataste nuestro servicio de daños a terceros, el costo es de (por mes):", precio_seguro_a, "pesos.");
    console.log("Descuento por registrarte: ", precio_total_a, "pesos.");
    console.log("Total a pagar(por mes): ", precio_seguro_a - precio_total_a);

}
else if (carrito == "a" && usuario == "no registrado") {
    console.log("Contrataste nuestro servicio de daños a terceros, el costo es de (por mes):", precio_seguro_a, "pesos.");
    console.log("No aplica descuento.");
}

if (carrito == "b" && usuario == "registrado") {
    console.log("Contrataste nuestro servicio de daños a terceros + robo total, el costo es de (por mes):", precio_seguro_b, "pesos.");
    console.log("Descuento por registrarte: ", precio_total_b, "pesos.");
    console.log("Total a pagar(por mes): ", precio_seguro_b - precio_total_b);
}
else if (carrito == "b" && usuario == "no registrado") {
    console.log("Contrataste nuestro servicio de daños a terceros + robo total, el costo es de (por mes):", precio_seguro_b, "pesos.");
    console.log("No aplica descuento.");
}

if (carrito == "c" && usuario == "registrado") {
    console.log("Contrataste nuestro servicio de todo riesgo + destrucción total, el costo es de (por mes):", precio_seguro_c, "pesos.");
    console.log("Descuento por registrarte: ", precio_total_c, "pesos.");
    console.log("Total a pagar(por mes): ", precio_seguro_c - precio_total_c);
}
else if (carrito == "c" && usuario == "no registrado") {
    console.log("Contrataste nuestro servicio de todo riesgo + destrucción total, el costo es de (por mes):", precio_seguro_c, "pesos.");
    console.log("No aplica descuento.");
}


