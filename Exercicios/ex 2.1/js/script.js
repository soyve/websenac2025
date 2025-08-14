/*
Exercício 2.1
Faça um programa que leia 2 números, some-os e exiba 
uma mensagem com o resultado apenas se o resultado 
for maior que 100.
*/

const num1 = parseFloat(prompt("Digite um número: "));
const num2 = parseFloat(prompt("Digite mais um número: "));

const soma = num1 + num2;
soma > 100 ? alert(`A soma dos nuemros é ${soma}, que é maior que 100.`) 
: alert(`A soma dos numeros é ${soma}, que é menor ou igual a 100.`);

console.log("Numeros somados:", num1, num2);
console.log("Resultado:", soma)