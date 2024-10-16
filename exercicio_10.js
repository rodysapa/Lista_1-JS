function gerarListaAleatoria(n) {
  const nomes = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo", "Fernanda", "Gabriel", "Helena", "Igor", "Júlia"];
  const lista = [];

  for (let i = 1; i <= n; i++) {
      const nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];
      const idadeAleatoria = Math.floor(Math.random() * (90 - 18 + 1)) + 18;

      lista.push({
          id: i,
          nome: nomeAleatorio,
          idade: idadeAleatoria
      });
  }

  return lista;
}

function ordenarPorAtributo(lista, atributo) {
  return lista.sort((a, b) => {
      if (typeof a[atributo] === 'string' && typeof b[atributo] === 'string') {
          return a[atributo].localeCompare(b[atributo]); 
      } else {
          return a[atributo] - b[atributo]; 
      }
  });
}


const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite o número de lista que deseja ver: "));
let lista = gerarListaAleatoria(numero);
console.log("Lista original:", lista);


let atributo = prompt("Digite o atributo para ordenar (nome ou idade): ").toLowerCase();


let listaOrdenada = ordenarPorAtributo(lista, atributo);
console.log("Lista ordenada por " + atributo + ":", listaOrdenada);
