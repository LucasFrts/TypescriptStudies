"use strict";
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
console.log(normalizarTexto(' DeSign '));
const input = document.querySelector("input");
const total = localStorage.getItem("total");
if (total && input) {
    input.value = total;
    calcularGanho(Number(input.value));
}
if (input)
    input.addEventListener("keyup", totalMudou);
function calcularGanho(value) {
    const p = document.querySelector("p");
    if (p)
        p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
}
function totalMudou() {
    let value = input != null ? input.value : "";
    localStorage.setItem("total", value);
    calcularGanho(Number(value));
}
