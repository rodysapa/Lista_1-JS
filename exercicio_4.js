function tabuada (numero){
  var arrayTabuada = [10]
  for(i = 0; i <= 10; i++){
    arrayTabuada[i] = numero * i
  }
  return arrayTabuada
}

const prompt = require('prompt-sync')(); 

let numero = parseInt(prompt("Digite o número da tabuada: "))

let resultado = tabuada(numero)

console.log("Tabuada: " +resultado)