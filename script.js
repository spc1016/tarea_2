import _ from "https://cdn.jsdelivr.net/npm/lodash-es@4.17.21/+esm";

const numeros = [1, 2, 3, 4, 5];

console.log("Lodash funciona:", _.sum(numeros));

console.log("%cChalk funciona correctamente", "color: green; font-weight: bold");

document.getElementById("resultado").textContent =
    `Lodash funciona: suma = ${_.sum(numeros)}`;

