let ladoA = 5;
let ladoB = 5;
let ladoC = 6;

let ehTriangulo = (ladoA, ladoB, ladoC) => {
    if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
        return true;
    } else {
        return false;
    }
}

let tipoTriangulo = (ladoA, ladoB, ladoC) => {
    if (ladoA === ladoB && ladoB === ladoC) {
        return "Equilátero";
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        return "Isósceles";
    } else {
        return "Escaleno";
    }
}

if (ehTriangulo(ladoA, ladoB, ladoC)) {
    console.log("É um triângulo " + tipoTriangulo(ladoA, ladoB, ladoC));
}
else {
    console.log("Não é um triângulo");
}