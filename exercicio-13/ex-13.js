const prompt = require('prompt-sync')();

let soma = 0;
let contagem = 0;
let num = 0;

while ((num = Number(prompt('Digite um número decimal ou "0" para sair: '))) !== 0) {
    soma += num;
    contagem++;
}

if (contagem === 0) {
    console.log('Nenhum número foi digitado.');
} else {
    let media = soma / contagem;
    console.log(`A média aritmética dos números digitados é: ${media}`);
}