"use strict";
let produto = 'Livro';
let preco = 200;
const carro = {
    marca: "Audi",
    portas: 5
};
const barato = preco < 205 ? true : "produto caro";
function somar(a, b) {
    return `${a + b}`;
}
somar(15, 22);
const nintendo = {
    nome: 'Nintendo',
    preco: "2000"
};
function transformarPreco(produto) {
    produto.preco = 'R$ ' + produto.preco;
    return produto;
}
const produtoNovo = transformarPreco(nintendo);
