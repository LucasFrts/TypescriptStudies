"use strict";
var _a;
const normalizar = (texto) => {
    return texto.trim().toLowerCase();
};
console.log(normalizar('200'));
const button = document.querySelector('button');
const config = localStorage.getItem('config');
if (button) {
    button.click();
}
button === null || button === void 0 ? void 0 : button.click();
const jogo = {
    nome: "Ragnarok"
};
(_a = jogo.nome) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase();
