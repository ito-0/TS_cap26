// Função de multiplicação q recebe 2 num como argumentos e retorna o resultado da multiplicação
function multiplicacao(num1: number, num2: number): number {
    return num1 * num2;
}

// Função de saudação q recebe nome como argumento e retorna a concatenação "Olá " + nome
function saudacao(nome: string): string {
    return "Olá " + nome;
}

const resultadoMultiplicacao = multiplicacao(5, 3);
console.log(resultadoMultiplicacao);

const saudacaoParaUsuario = saudacao("João");
console.log(saudacaoParaUsuario); 