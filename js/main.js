function precio_a_pagar(monto, usuario) {
    if (usuario == "Cliente" || usuario == "cliente") {
        let precio_cliente = monto * 0.91;
        return precio_cliente;
    } else if (usuario == "No Cliente" || usuario == "no cliente") {
        let precio_no_cliente = monto * 1.21;
        return precio_no_cliente;
    }
}

let usuario = prompt(
    "Ingresar si es Cliente o No Cliente. Recordá que si sos Cliente te descontamos un 30%."
)

// VERIFICADOR DE CLIENTE

while (usuario != "Cliente" && usuario != "cliente" && usuario != "No Cliente" && usuario != "no cliente") {
    alert("Ingrese Cliente o No Cliente.");
    usuario = prompt(
        "Ingresar si es Cliente o No Cliente. Recordá que si sos Cliente te descontamos un 30%."
    );
}

let compra = prompt(
    "Escriba el nombre de lo que desea comprar: Remera $4.000, Camisa $6.500 o Campera $11.000. Los precios no incluyen IVA. Si no desea comprar nada escriba Fin."
);
let cantidad_remeras = 0;
let cantidad_camisas = 0;
let cantidad_camperas = 0;
let precio_total_remeras = precio_a_pagar(4000, usuario);
let precio_total_camisas = precio_a_pagar(6500, usuario);
let precio_total_camperas = precio_a_pagar(11000, usuario);

// BUCLE DE COMPRAS

while (compra != "Fin" && compra != "fin") {
    if (compra == "Remera" || compra == "remera") {
        // let total = precio_a_pagar (4000, usuario);
        cantidad_remeras++;
    } else if (compra == "Camisa" || compra == "camisa") {
        // let total = precio_a_pagar (6500, usuario);
        cantidad_camisas++;
    } else if (compra == "Campera" || compra == "campera") {
        // let total = precio_a_pagar (11000, usuario);
        cantidad_camperas++;
    } else {
        alert("Ingresa un valor válido");
    }

    compra = prompt(
        "Desea agregar: Remera $4.000, Camisa $6.500 o Campera $11.000. Los precios no incluyen IVA. Si desea finalizar la compra escriba Fin"
    );
}

// CÁLCULO FINAL DE LAS COMPRAS

if (cantidad_remeras > 0) {
    console.log(
        "Compraste ",
        cantidad_remeras,
        " remera/s y gastaste $",
        cantidad_remeras * precio_total_remeras
    );
}
if (cantidad_camisas > 0) {
    console.log(
        "Compraste ",
        cantidad_camisas,
        " camisa/s y gastaste $",
        cantidad_camisas * precio_total_camisas
    );
}
if (cantidad_camperas > 0) {
    console.log(
        "Compraste ",
        cantidad_camperas,
        " campera/s y gastaste $",
        cantidad_camperas * precio_total_camperas
    );
}

let cantidad_total =
    cantidad_remeras * precio_total_remeras +
    cantidad_camisas * precio_total_camisas +
    cantidad_camperas * precio_total_camperas;

if (cantidad_total != NaN) {
    console.log("Gastaste en total $", cantidad_total);
}
