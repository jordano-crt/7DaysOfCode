let numeroUn = 1

let stringUn = '1'

let numeroTreinta = 30

let stringTreinta = '30'

let numeroDiez = 10

let stringDiez = '10'


console.log("\nComprobación con el operador de comparación estricto ===\nPara verificar que sean iguales en tipo y valor\n");

if (numeroUn == stringUn) {// operador de comparación debil 

  console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes');

} else {

  console.log('Las variables numeroUn y stringUn no tienen el mismo valor');

}

 

if (numeroTreinta === stringTreinta) {// operador de comparación estricto

  console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo');

} else {

  console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo');

}

 

if (numeroDiez == stringDiez) {

  console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes');

} else {

  console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor');

}

console.log("\nComprobación con el operador de comparación estricto !==\nPara verificar que sean de distinto tipo o diferentes en valor\n");

if (numeroUn !== stringUn){
    console.log('Las variables numeroUn y stringUn no tienen el mismo tipo, o valor');
} else {
    console.log('Las variables numeroUn y stringUn tienen el mismo valor y tipo');
}

