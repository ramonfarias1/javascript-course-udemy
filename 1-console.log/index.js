/*
Primeiramente é necessário entender que o console é um objeto, e o log() é apenas um método deste objeto

Há diversos outros métodos, como:

error();
warn();
clear();
time();
table();
count();
group();
e o próprio log();
Cada um tem a sua utilização específica, o log() tem como sua função emitir mensagens de depuração do sistema.



O método log():

Este método de console vai enviar os dados diretamente para o console do navegador
*/

// Exemplo 01, exibindo valores brutos:

// Tem que usar aspas simples (''), duplas ("") ou crase (´´) para que o texto digitado dentro do parênteses seja idêntificado como uma STRING.

console.log('hello world')

console.log("hello world")

console.log(`hello world`)  // A crase (`) é utilizada mais para a utilização de TEMPLATE STRINGS

console.log(1234) // Números não precisam de aspas ou crase, a não ser que você queira transformar eles em STRING.

console.log('1234') // Números em STRING

console.log(3.14) // Você não pode usar virgula para valores decimais, apenas ponto (.)

console.log('hello world!', 123456) // Você pode mostrar dois valores separando-os por vírgula (,)

// Caso tenha aspas simples ou duplas no texto, como por exemplo uma frase, caso a frase esteja em aspas simples, utilize aspas duplas para transformar em STRING, e vice-versa. Caso a frase tenha os dois tipos de aspas, utilize a crase.

console.log('meu pai sempre dizia "bla bla bla"')

console.log("minha mãe sempre dizia 'blu blu blu")

console.log(`meu pai dizia "bla bla bla" e a minha mãe 'blu blu blu'`)

//Exemplo 02, exibindo valores de variáveis:

var nome = 'ramon'
var celular = 40028922

console.log('meu nome é', nome, 'e meu número de celular é:', celular)

console.log(`meu nome é ${nome} e meu celular é ${celular}`) // Isto é um exemplo de TEMPLATE STRING

// Você também pode exibir valores de OBJECTS E ARRAYS