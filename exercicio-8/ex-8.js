let numA = 550;
let numB = 20;

let maiorDeDois = (numA, numB) => {
    if (numA > numB) {
        return numB + ' ' + numA;
    } else {
        return numA + ' ' + numB;
    }
}

console.log(maiorDeDois(numA, numB));