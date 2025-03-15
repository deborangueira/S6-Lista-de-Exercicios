
function somaArray(numeros) {

    let soma = 0; // declaração da variável soma e número de inicio

    for (let i = 0; i < numeros.length; i++) { // adicionei a variável let antes de "i" e, alterei "size" para "length" que é a forma que o JS quantifica o tamanho de um array
        soma += 2*numeros[i]; // adicionei o + antes do sinal de =, assim os números resultantes dessa operação vão sendo somados entre si
    }
    return soma;
}
console.log(somaArray([1, 2, 3, 4]));