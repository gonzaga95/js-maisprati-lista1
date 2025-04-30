const prompt = require('prompt-sync')();

let num;
while (isNaN(num)){
    num = Number(prompt('Digite um número: '));
}

function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * fatorial(n - 1);
}

console.log(`O fatorial de ${num} é: ${fatorial(num)}`);