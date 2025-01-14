function inverterString(texto) {
    let invertida = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        invertida += texto[i];
    }
    return invertida;
}

const texto = prompt("Informe uma string:");
console.log("Invertida:", inverterString(texto));