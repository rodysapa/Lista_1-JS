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

const prompt = require('prompt-sync')();  

let numero = prompt("Digite o numero de lista que queira ver: ")

let lista = gerarListaAleatoria(numero)

console.log(lista)

