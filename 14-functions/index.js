                                            //* FUNCTIONS

// Uma função JavaScript é um bloco de código projetado para executar um tarefa específica.

/* O código dentro da função será executado quando "algo" invocar (chamar) a função:

- Quando ocorre um evento (quando um usuário clica em um botão)
- Quando ele é invocado (chamado) a partir do código JavaScript
- Automaticamente (auto-invocado)
*/

// As regras de criação para o nome das funções são as mesmas das variáveis

// As variáveis dentro da function são locais, ou seja, não é possível acessa-las fora da function

// Você pode criar parâmetros para a function dentro dos parênteses () e enviar valores para esses param.

// Os valores são enviados dentro dos parênteses do invocador da function (quem chama)

//# function nomeDaFunction(param1, param2...) {}
//# nomeDaFunction(value: any) // Invocador da Function

function saudacao(nome) {
    return `Boa Noite ${nome}!`; // Retorna o valor
};

const valorRetornado = saudacao('PunPun'); // Invocador da Function
console.log(valorRetornado);

function soma(n1, n2) {
    const resultado = n1 + n2; // Scopo Local ( funciona apenas dentro da function )
    console.log('este texto será exibido pois ele está antes do Return');
    return resultado; // Quando retornarmos um valor, a function é encerrada, então qualquer código digitado abaixo de Return, não será executado.
    console.log('este texto não será exibido pois ele está depois do Return')
};

console.log(soma(6, 8));
console.log(soma(3, 1));
console.log(soma()); // Se não enviarmos nenhum valor para a function, o valor retornado será NaN, pois mesmo não enviando os valores, os parâmentros da function receberam o valor Undefined, e tentara somar esses valores, fazendo com que o valor retornado seja NaN, já que undefined não são números.
console.log(soma(5)) // tentara somar 5 + undefined
console.log(soma('ramon ', 'farias')) // Vai concatenar

const resultado = soma(9, 7); // Como as variáveis dentro das functions tem scopo local, podemos nomear outras variáveis fora das functions com o mesmo nome dessas variáveis, mas não é uma boa prática de programação ter duas variáveis com nomes iguais.

function soma2(n1 = 1, n2 = 1) { // Também podemos definir os valores direto nos parâmentros fazendo com que n1 e n2 recebam esses valores caso eles não recebam os valores do invocador.
    const resultado = n1 + n2;
    return resultado;
};

console.log(soma2());
console.log(soma2(2, 5));

const raiz = function(n) { //  Outra forma de criar functions
    return n ** 0.5;
};

console.log(raiz(4));
console.log(raiz(9));

const raiz2 = (n) => { // Arrow Function
    return n ** 0.5;
};

console.log(raiz2(16));

const raiz3 = n =>
    n ** 0.5;
// Você pode remover os parênteses dos parâmetros se tiver apenas um, e também remover as chaves e a palavra return se tiver apenas uma linha na function

console.log(raiz3(36));

//! DICA: É interessante criar uma function para cada uma coisa específica do que criar uma function que faz varias coisas com um código gigante.