function inverterNumero(numero) {
  let numArray = numero.toString().split('');
  let numInvertidoArray = numArray.reverse();
  let numInvertido = parseInt(numInvertidoArray.join(''));
  
  return numInvertido;
}

const prompt = require('prompt-sync')(); 

let numero = parseInt(prompt("Digite um número:"));
let resultado = inverterNumero(numero);
console.log("Número invertido:", resultado);
