"use strict";
const numeros = [10, 20, 30, 40, 50, 3];
const valores = [10, 'Taxas', 30, 'Produto', 50, 3];
const dados = [
    ['senhor dos aneis', 80],
    ['a guerra dos tronos', 120]
];
const maiorQueDez = (data) => {
    return data.filter(n => n > 10);
};
const filtrarValores = (data) => {
    return data.filter(item => typeof item === 'number');
};
const showDados = (data) => {
    return data.map((k) => (`Nome: ${k[0]} Valor: R$ ${k[1]}`));
};
console.log(showDados(dados));
console.log(maiorQueDez(numeros));
console.log(filtrarValores(valores));
