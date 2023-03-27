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
const fetchApi = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(url);
    const data = yield response.json();
    showCursos(data);
});
const showCursos = (data) => {
    for (let i = 0; i < data.length; i++) {
        document.body.innerHTML += `
            <div>
                <h3 style="color:${data[i].nivel == 'iniciante' ? 'blue' : 'red'}">Curso: ${data[i].nome}</h3>
                <p>Carga Horária: ${data[i].horas}h</p>
                <p>Aulas: ${data[i].aulas}</p>
                <p>Gratuito: ${data[i].gratuito ? "Sim" : "Não"}</p>
                <strong>Tags</strong>
                <ul>
                    ${data[i].tags.map((tag) => '<li>' + tag + '</li>')}
                </ul>
                <strong>Id Aulas</strong>
                <ul>
                    ${data[i].idAulas.map((aula) => '<li>' + aula + '</li>')}
                </ul>
                <strong>Nivel: ${data[i].nivel}</strong>
            </div>
        `;
    }
};
fetchApi('https://api.origamid.dev/json/cursos.json');
