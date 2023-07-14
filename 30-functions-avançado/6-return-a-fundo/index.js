// Uma function pode ou não retornar um valor dependendo da necessidade.

//* Exemplo de function que retorna valor:

function soma(a, b){
    return a + b;
};

console.log(soma(2, 5));

//* Exemplo sem retornar valor:

function soma2(a, b) {
    console.log(a + b);
};

soma2(2, 5);

//* Exemplo de function que retorna um object:

function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome};
};

console.log(criaPessoa('Ashley', 'Graham'));

//# Closure Function
// Uma closure é a combinação de uma função com as referências ao estado que a circunda (o ambiente léxico). Em outras palavras, uma closure lhe dá acesso ao escopo de uma função externa a partir de uma função interna. Em JavaScript, as closures são criadas toda vez que uma função é criada, no momento da criação da função.

//* Exemplo:

function falaFrase1(frase1) {
    function falaFrase2(frase2) {
        return frase1 + ' ' + frase2;
    };

    return falaFrase2;
};

const frase2 = falaFrase1('hello');

const fraseCompleta = frase2('mundo!');

console.log(fraseCompleta);

/* Exemplo explicado:
 - A constante "frase2" chama a function "falaFrase1" enviando 'hello' como valor de argumento
 - A function "falaFrase1" recebe o valor de argumento 'hello' como parâmetro e retorna a function
   "falaFrase2" para a constante "frase2".
 - Após isso tudo a constante "fraseCompleta" chama a function "falaFrase2" que está dentro da outra
   constante "frase2", pra fazer isso digitasse o nome da constante com parênteses como no exemplo acima, e também foi passado 'mundo!' como valor de argumento para a function que está dentro da constante.
 - Após o chamado da function "falaFrase2" que está dentro da constante "frase2" ser feito, ela
   retorna a concatenação do valor do parâmetro da function "falaFrase1", que é 'hello', mais o valor de argumento que ela recebeu quando foi chamada na constante "fraseCompleta", que é 'mundo!'.
 - Após isso mostrasse apenas o valor recebido em "fraseCompleta" utilizando console.log, no caso o
   valor é a frase "hello mundo!".
*/

//# Exemplo prático de uso de Closure Function:

// Faça um algoritmo que duplica, triplica e quadruplica um número
//* Exemplo sem usar closure function:

//? function duplica(num) {
//?     return num * 2;
//? };

//? function triplica(num) {
//?     return num * 3;
//? };

//? function quadruplica(num) {
//?     return num * 4;
//? };

//? console.log(duplica(2));

//? console.log(triplica(2));

//? console.log(quadruplica(2));

//* Exemplo utilizando Closure Function:

function recebeMultiplicador(multiplicador) {
    return function(multiplicando) {
        return multiplicando * multiplicador;
    };
};

const duplica = recebeMultiplicador(2);
const triplica = recebeMultiplicador(3);
const quadruplica = recebeMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadruplica(2));