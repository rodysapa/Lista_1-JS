function repetirMensagem(N, palavra) {
  let frase = "";
  
  for (let i = 0; i < N; i++) {
    frase += palavra;
  
    if (i < N - 1) {
      frase += ' '; 
    }
  }
  
  return frase;
}

const prompt = require('prompt-sync')(); 

let N = parseInt(prompt("\nDigite quantas vezes a frase deve ser repetida: ")); 
let palavra = prompt("Digite a frase para ser repetida: ");

let frase = repetirMensagem(N, palavra);

console.log(frase);
