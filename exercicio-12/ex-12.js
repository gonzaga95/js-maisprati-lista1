const prompt = require('prompt-sync')();

let num;
while (isNaN(num)) {
    num = Number(prompt("Digite um número: "));  
}

for (let i = 1; i <= 10; i++) {
    let resultado = num * i;
    console.log(`${num} x ${i} = ${resultado}`);
}