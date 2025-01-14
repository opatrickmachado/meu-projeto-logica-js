function pertenceFibonacci(num) {
    let a = 0, b = 1;
    while (b < num) {
        [a, b] = [b, a + b];
    }
    return num === b || num === 0;
}

const numero = parseInt(prompt("Informe um número: "), 10);
if (pertenceFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
