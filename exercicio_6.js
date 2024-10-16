function contarVogais(palavra) {
  let vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let contador = 0;

  for (let i = 0; i < palavra.length; i++) {
      if (vogais.includes(palavra[i])) {
          contador++;
      }
  }

  return contador;
}

const prompt = require('prompt-sync')(); 

let palavra = prompt("Digite uma palavra:");
let numeroDeVogais = contarVogais(palavra);
console.log(`Número de vogais em "${palavra}":`, numeroDeVogais);
