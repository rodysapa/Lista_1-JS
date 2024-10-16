function estaBemFormada(sequencia) {
  const pilha = [];
  const pares = {
      ')': '(',
      ']': '['
  };

  for (let char of sequencia) {
      if (char === '(' || char === '[') {
          pilha.push(char);
      } else if (char === ')' || char === ']') {
          
          if (pilha.length === 0 || pilha.pop() !== pares[char]) {
              return false; 
          }
      }
  }

  return pilha.length === 0;
}

const prompt = require('prompt-sync')();  

let sequencia = prompt("Digite a sequência desejada: ")

let sequeciaVerificada = estaBemFormada(sequencia)

console.log(sequeciaVerificada)
