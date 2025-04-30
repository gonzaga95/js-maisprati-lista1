const prompt = require('prompt-sync')();

console.log("Vou solicitar a você 5 números para realizar a soma deles.");
let numeros = [];

for (let i = 0; i < 5; i++) {
    let numero = prompt(`Digite o ${i + 1}º número: `);
    numeros.push(parseInt(numero));
}

let soma = 0;
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

console.log(`A soma dos números é: ${soma}`);