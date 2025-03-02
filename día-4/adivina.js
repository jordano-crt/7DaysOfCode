
let numeroRandom = Math.floor(Math.random() * 10) + 1;
//alert(numeroRandom);

let numeroUsuario = "";
let vidas = 3;
while (vidas > 0) {
    numeroUsuario = parseInt(prompt("Adivina el número entre 1 y 10"));
    if (numeroUsuario === numeroRandom){
        alert("¡Felicidades! Adivinaste el número: " + numeroRandom);
        break;
    } else {
        vidas--;
        alert(`Te quedan ${vidas} vidas`);
        if (vidas === 0){
            alert("¡Perdiste! El número era " + numeroRandom);
        }
    }
}