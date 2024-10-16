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

function mediaLista(lista){
  let soma = 0

  for(i = 0; i < lista.length; i++){
    soma += lista[i].idade
  }

  const media = soma/lista.length
  return media
}

const prompt = require('prompt-sync')();  

let numero = prompt("Digite o numero de lista que queira ver: ")

let lista = gerarListaAleatoria(numero)

let media = mediaLista(lista)

console.log(lista)

console.log("A média é: "+media)

