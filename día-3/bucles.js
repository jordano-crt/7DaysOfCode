let Respuesta1 = "¿Quieres seguir el área de Front-End o seguir el área de Back-End?";
let Respuesta11 = prompt(Respuesta1).toLowerCase();
let Respuesta2 = "";
alert(Respuesta11);


if (Respuesta11 === "front-end") {
    Respuesta2 = prompt("Quieres aprender React o aprender Vue");
} else if (Respuesta11 === "back-end") {
    Respuesta2 = prompt("Quieres aprender C# o aprender Java");
} else {
    alert("Respuesta no válida");
}

let Respuesta3 = `Quieres seguir el área ${Respuesta11} o Desarrollarse para ser fullStack?`;
prompt(Respuesta3).toLowerCase();
let Respuesta4 = "";

while (true){
    Respuesta4 = prompt("tecnologías le gustaría a la persona especializarse o conocer");
    if (Respuesta4 === "no") {
        break;
    }
}

while (true){
    Respuesta4 = prompt("¿Hay alguna otra tecnologia que te gustaría aprender?");
    if (Respuesta4 === "no") {
        break;
    } else if (Respuesta4 === "unity") {
        alert("Unity es una excelente tecnología para aprender, te permitirá desarrollar videojuegos");
    } else if (Respuesta4 === "Lua") {
        alert("Lua es un lenguaje de programación que se utiliza en videojuegos y en aplicaciones web");
    }
}
