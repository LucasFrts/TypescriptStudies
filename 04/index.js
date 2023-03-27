"use strict";
const frase = "Front end";
const preco = 500;
const condi = false;
console.log(typeof frase);
console.log(typeof preco);
console.log(typeof document);
if (typeof frase === 'string') {
    frase.toLowerCase();
    console.log('frase é string');
}
else {
    console.log('frase não é string');
}
let total = 200;
function isNumber(value) {
    return typeof value == 'number';
}
if (isNumber(total)) {
    console.log('é um numero');
}
const button = document.querySelector('button');
button === null || button === void 0 ? void 0 : button.click();
// exercicio
const toNumber = (value) => {
    if (typeof value === 'number') {
        return value;
    }
    else if (typeof value == 'string')
        return Number(value);
    throw 'value deve ser um número | string';
};
console.log(toNumber("900"));
