let quantidadeMacas = 11;
let precoMaca;

if (quantidadeMacas < 12) {
    precoMaca = 0.30;
}
else {
    precoMaca = 0.25;
}

let valorTotal = quantidadeMacas * precoMaca;

console.log("O valor total a ser pago é: R$" + valorTotal.toFixed(2));