let peso = 50; //Peso em kg
let altura = 152; //Altura em cm

let imc = peso / ((altura / 100) ** 2);
console.log(imc);

if (imc > 30) {
  console.log("Obesidade.");
}
else if (imc < 30 && imc > 25) {
  console.log("Acima do peso.");
}
else if (imc < 25 && imc > 18.5) {
  console.log("Peso normal.");
}
else {
  console.log("Abaixo do peso.");
}