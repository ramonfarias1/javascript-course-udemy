//# O objeto "arguments"
// O JavaScript não executa nenhuma verificação em valores de parâmetro (argumentos).

// As funções JavaScript têm um objeto interno chamado "arguments".

// Argumentos de função são os valores reais passados para (e recebidos pela) a função.

// O objeto "arguments" contém uma matriz dos argumentos usados quando a função foi chamado (invocado).

// O Objeto "arguments" funciona apenas em functions declaradas de maneira clássica, não funciona em arrow functions.

//*Exemplo:

function qualquerCoisa() {
    console.log(arguments);
    for (let argument of arguments) {
        console.log(argument);
    };
};
qualquerCoisa('uma string', 1, 2, 3, 4, 5);

// Desta forma, você pode simplesmente usar uma função para encontrar (por exemplo) o mais alto valor em uma lista de números:
//* Exemplo:

function maiorNumero() {
    let maior = 0;
    for (let argument of arguments) {
        if (argument > maior) maior = argument;
    };
    return maior;
};
console.log(maiorNumero(122, 80, 101, 35, 110, 56));

// Ou crie uma function pra somar todos os números:
//* Exemplo:

function somaTotal() {
    let total = 0;
    for (let argument of arguments) {
        // total = total + argument;
        total += argument;
    };
    return total;
};
console.log(somaTotal(1, 2, 3, 4, 5, 6, 7 , 8, 9));

//# Valores de Parâmetros Padrão
// Se uma função for chamada com argumentos ausentes (menor que declarado), os valores ausentes serão definidos como "undefined".

//* Exemplo:

function qualquerCoisa(a, b, c, d, e) {
    console.log(a, b, c, d, e);
};
qualquerCoisa(1, 2, 3);

// Você pode definir um valor padrão para os parâmentros pra caso eles não receberem argumentos ao chamar a function.
//*Exemplo:

function qualquerCoisa2(a, b, c, d = 4, e = 5) {
    console.log(a, b, c, d, e);
};
qualquerCoisa2(1, 2, 3);

// Se você não quiser enviar um argumento para um parâmetro é só colocar o valor "undefined" na chamada da function, que o parâmetro vai receber o valor padrão definido ou vai receber o próprio valor "undefined" se não tiver valor padrão definido.
//* Exemplo:

function qualquercoisa3(a, b, c, d, e = 5) {
    console.log(a, b, c, d, e);
};
qualquercoisa3(1, undefined, 3, 4, undefined);

//# Desestruturação nos Parâmetros
// Você pode desestruturar um Array ou Object como parâmetro de uma function.

//* Exemplo com Object:

function desestruturaçãoObj({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
};

const obj = {nome: 'Leon', sobrenome: 'Kennedy', idade: 25};
desestruturaçãoObj(obj);

//* Exemplo com Array:

function desestruturaçãoArray([pessoa1, pessoa2, pessoa3, pessoa4]) {
    console.log(pessoa1, pessoa2, pessoa3, pessoa4);
};

const pessoas = ['Leon', 'Claire', 'Chris', 'Luis'];
desestruturaçãoArray(pessoas);

//# Operador rest(...) nos parâmentros da function
// Nas functions o operador rest(...) retorna os argumentos restantes como um Array.

// O operador rest(...) sempre tem que vir por último.

//* Exemplo:

function total(operador, valorAcumulativo, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') valorAcumulativo += numero;
        if (operador === '-') valorAcumulativo -= numero;
        if (operador === '*') valorAcumulativo *= numero;
        if (operador === '/') valorAcumulativo /= numero;
    };
    return valorAcumulativo;
};

console.log(total('+', 0, 1, 2, 3, 4, 5));

// Pode-se usar o operador rest(...) pra pegar todos os argumentos igual ao que o objeto "arguments" faz, mas ao contrário do object "arguments", o operador rest(...) funciona com arrow functions, o que tornar ele uma opção melhor.

//* Exemplo:

const argumentos = (...args) => console.log(args);
argumentos('texto', 1, 2, 3, 4, 5);