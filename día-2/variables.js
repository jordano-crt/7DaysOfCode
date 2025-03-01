
let Respuesta1 = prompt("¿Cuál es tu nombre?");
let Respuesta2 = prompt("¿Cuantos años tienes?");
let Respuesta3 = prompt("¿Que lenguaje de programación estas estudiando?");

alert(`Hola ${Respuesta1}, tienes ${Respuesta2} años y estas estudiando ${Respuesta3}!`);

alert(`¿Te gustar estudiar ${Respuesta3}? reponde con el número 1 para SÍ o 2 para NO`);
let Respuesta4 = prompt("Ingresa número 1 o 2");

while (Respuesta4 !== "1" && Respuesta4 !== "2") {
    Respuesta4 = prompt("Respuesta inválida. Por favor, ingresa el número 1 para SÍ o 2 para NO");
}


if (Respuesta4 === "1"){
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
} else if (Respuesta4 === "2"){
    alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?")
}