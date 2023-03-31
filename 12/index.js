"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b;
function retorno(a) {
    return a;
}
console.log(retorno('again').toLowerCase());
console.log(retorno(200).toFixed());
console.log(retorno(true).valueOf());
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const frutas = ['banana', 'pera', 'uva', 'laranja', 'limao', 'maçã'];
function firstFive(lista) {
    return lista.slice(0, 5);
}
console.log(firstFive(numeros).map(item => item.toFixed()));
console.log(firstFive(frutas).map(item => item.toUpperCase()));
function notNull(arg) {
    return arg != null ? arg : null;
}
(_a = notNull('andré')) === null || _a === void 0 ? void 0 : _a.toLowerCase();
(_b = notNull(200)) === null || _b === void 0 ? void 0 : _b.toFixed();
function tipoDado(a) {
    const resultado = {
        dado: a,
        tipo: typeof a
    };
    return resultado;
}
console.log(tipoDado(200));
const extractText = (element) => {
    return {
        texto: element.innerText,
        element
    };
};
const link = document.querySelector('a');
if (link) {
    console.log(extractText(link).element.href);
}
function $(selector) {
    return document.querySelector(selector);
}
const a = $('a');
const selector = document.querySelector('.link');
if (link instanceof HTMLAnchorElement) {
    link === null || link === void 0 ? void 0 : link.href;
}
const fetchApi = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(url);
    const data = yield response.json();
    return data;
});
const handleData = () => __awaiter(void 0, void 0, void 0, function* () {
    const notebook = yield fetchApi('https://api.origamid.dev/json/notebook.json');
    return notebook;
});
const data = handleData();
