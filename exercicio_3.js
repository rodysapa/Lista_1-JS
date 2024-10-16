function opcoes (opcao, numero1, numero2){
  switch(opcao){
    case 1: 
      var resultado = numero1 + numero2
      return resultado

    case 2: 
      resultado = numero1 - numero2
      return resultado

    case 3: 
      if(numero1 == 0 || numero2 === 0){
        return null
      }
      resultado = numero1 / numero2
      return resultado

    case 4: 
      resultado = numero1 * numero2
      return resultado

    default: 
      break
  }
}

const prompt = require('prompt-sync')(); 

console.log("Digite a opcao desejada:")
console.log("[1] Adição")
console.log("[2] Subtração")
console.log("[3] Divisão")
console.log("[4] Multiplicação")

let opcao = parseInt(prompt("Digite a opção desejada: "))

let numero1 = parseInt(prompt("Digite o número 1: "))

let numero2 = parseInt(prompt("Digite o número 2: "))

let resultado = opcoes(opcao, numero1, numero2)

console.log("Resultado é: " +resultado)