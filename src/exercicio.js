"use strict";
// Função de multiplicação q recebe 2 num como argumentos e retorna o resultado da multiplicação
function multiplicacao(num1, num2) {
    return num1 * num2;
}
// Função de saudação q recebe nome como argumento e retorna a concatenação "Olá " + nome
function saudacao(nome) {
    return "Olá " + nome;
}
// Exemplo de uso das funções:
const resultadoMultiplicacao = multiplicacao(5, 3);
console.log(resultadoMultiplicacao);
const saudacaoParaUsuario = saudacao("João");
console.log(saudacaoParaUsuario);
