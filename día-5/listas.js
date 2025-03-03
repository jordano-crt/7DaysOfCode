let lista_compras = [];
let lista_categoria = ["frutas", "verduras", "lacteos", "carnes", "limpieza", "otros"];

let comenzar = prompt("¿Desea agregar alimentos a la lista de compras? si/no").toLowerCase();

while (comenzar === "si") {
    let producto = prompt("¿Qué alimento desea ingresar a la lista de compras? (Escribe 'no' para salir)").toLowerCase();

    if (producto === "no") {
        break;
    }

    let categoria = prompt("¿A qué categoría pertenece el alimento?").toLowerCase();

    if (!lista_categoria.includes(categoria)) {
        alert("La categoría ingresada no es válida. Inténtalo de nuevo.");
        continue; // Regresa al inicio del bucle sin agregar nada
    }

    // Buscar si la categoría ya está en la lista de compras
    let encontrada = false;
    for (let i = 0; i < lista_compras.length; i++) {
        if (lista_compras[i][0] === categoria) {
            lista_compras[i].push(producto);
            encontrada = true;
            break;
        }
    }

    // Si la categoría no estaba en la lista, la agregamos con el producto
    if (!encontrada) {
        lista_compras.push([categoria, producto]);
    }

    console.log(`Producto agregado: ${producto} a la categoría ${categoria}`);
}

// Imprimir la lista de compras
console.log("Lista de compras:");
for (let i = 0; i < lista_compras.length; i++) {
    console.log(`${lista_compras[i][0]}: ${lista_compras[i].slice(1).join(", ")}`);
}
