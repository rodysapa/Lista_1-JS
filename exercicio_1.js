function fatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }

  let fatorial = 1;
  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
  }

  return fatorial;
}

function resultado() {
  const prompt = require('prompt-sync')();

  let numero = prompt('\nDigite o numero para calcular o fatorial: ');

  let resultadoFatorial = fatorial(numero)
  console.log("\n fatorial: " +resultadoFatorial)
}

resultado(); 
