const dados = [0, 1500, 2300, 0, 4200, 3700, 0, 5000]; // Exemplo de dados

function analiseFaturamento(dados) {
    const faturamento = dados.filter(valor => valor > 0);
    const menor = Math.min(...faturamento);
    const maior = Math.max(...faturamento);
    const media = faturamento.reduce((acc, val) => acc + val, 0) / faturamento.length;
    const diasAcimaMedia = faturamento.filter(valor => valor > media).length;

    return { menor, maior, diasAcimaMedia };
}

const { menor, maior, diasAcimaMedia } = analiseFaturamento(dados);
console.log(`Menor: ${menor}, Maior: ${maior}, Dias acima da média: ${diasAcimaMedia}`);
