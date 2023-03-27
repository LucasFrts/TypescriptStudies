"use strict";
let total;
function preencherDados(dados) {
    document.body.innerHTML += `
    <div>
        <h2>
        ${dados.nome}
        </h2>
        <p>R$ ${dados.preco}</p>
        <small>Inclui teclado: ${dados.teclado ? "SIM" : "NÃO"}</small>
    </div>
    `;
}
const computador = {
    nome: "Computador",
    preco: 1500,
    teclado: false
};
const notebook = {
    nome: "Notebook",
    preco: 2500,
    teclado: true
};
preencherDados(computador);
preencherDados(notebook);
function pintarCategoria(categoria) {
    console.log(categoria);
    if (categoria === 'design')
        console.log("Pintar vermelho");
}
pintarCategoria("codigo");




