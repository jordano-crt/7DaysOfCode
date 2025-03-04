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


    let eliminar = prompt("¿Desea eliminar un producto de la lista de compras? si/no").toLowerCase();

    if (eliminar === "si"){
        let lista_formateada = lista_compras
        .map(sublista => `${sublista[0]}:\n  - ${sublista.slice(1).join("\n  - ")}`)
        .join("\n\n");

        let para_eliminar = prompt(`¿Qué producto desea eliminar de la lista de compras?\n\n${lista_formateada}`).toLowerCase();

        for (let i = 0; i < lista_compras.length; i++) {
            if (lista_compras[i].includes(para_eliminar)) {
                let index = lista_compras[i].indexOf(para_eliminar);
                lista_compras[i].splice(index, 1);
                console.log(`Producto eliminado: ${para_eliminar} de la categoría ${lista_compras[i][0]}`);
                break;
            }
        }   
    }

}

// Imprimir la lista de compras
console.log("Lista de compras:");
for (let i = 0; i < lista_compras.length; i++) {
    console.log(`${lista_compras[i][0]}: ${lista_compras[i].slice(1).join(", ")}`);
}
