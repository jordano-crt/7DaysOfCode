alert("Bienvenido a la calculadora de la semana 7");
let numero1 = prompt("Introduce el primer número");
let numero2 = prompt("Introduce el segundo número");

let continuar = true;
while (continuar){
    
    let operacion = parseInt(prompt("Introduce la operación que deseas realizar \nsuma (1),\nresta (2), \nmultiplicación (3), \ndivisión (4) \no salir (5)"));
    switch (operacion) {
    case 1:
        sumar()
        break;
    case 2:
        restar()
        break;
    case 3:
        multiplicar()
        break;
    case 4:
        division()
        break;
    case 5:
        alert("Gracias por usar la calculadora");
        continuar = false;
        break;
    default:
        break;
    }
}


function sumar() {
    let resultado = parseFloat(numero1) + parseFloat(numero2);
    alert("El resultado de la suma es: " + resultado);
}

function restar(){
    if (numero1 > numero2) {
        let resultado = parseFloat(numero1) - parseFloat(numero2);
        alert("El resultado de la resta es: " + resultado);
    } else if (numero1 < numero2) {
        let resultado = parseFloat(numero2) - parseFloat(numero1);
        alert("El resultado de la resta es: " + resultado);
    }
}

function multiplicar() {
    let resultado = parseFloat(numero1) * parseFloat(numero2);
    alert("El resultado de la multiplicación es: " + resultado);
}

function division() {
    if (numero2 == 0) {
        alert("No se puede dividir por 0");
    } else {
        let resultado = parseFloat(numero1) / parseFloat(numero2);
        alert("El resultado de la división es: " + resultado);
    }
}