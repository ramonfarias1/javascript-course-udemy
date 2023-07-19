//# Constructor Functions
// Assim como a Factory Function, a Constructor Function cria um objeto.

// Nas Constructor Functions, quando a palavra-chave "this" é usada, refere-se ao objeto quando o objeto é criado.

//* Nota: Considera-se uma boa prática colocar a primeira letra da sua função de construtor em maiúsculas.

function Pessoa(nome, sobrenome) {
    // Variáveis internas não pode ser acessadas fora do object.
    const id = 123456;
    const metodoInterno = function() {
        return console.log('sou um método interno')
    };

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.nomeCompleto = function() {
        return this.nome + ' ' + this.sobrenome;
    };
};

const pessoa01 = new Pessoa('legoshi', 'wolf'); // Para criar um objeto a partir de uma função de construtor, usamos a palavra-chave (new).
const pessoa02 = new Pessoa('Hana', 'Coelha');

console.log(pessoa01);
console.log(pessoa02);

console.log(pessoa01.nome, pessoa01.sobrenome);
console.log(pessoa02.nome, pessoa02.sobrenome);

console.log(pessoa01.nomeCompleto());
console.log(pessoa02.nomeCompleto());

pessoa01.age = 18; // Adicionando um novo parâmetro ao object
pessoa01.falaOi = function() { //  Adicionando um novo método ao object
    return console.log('Oi!');
};

console.log(pessoa01);
console.log(pessoa01.age);
console.log(pessoa01.falaOi());

//! NO ECMA SCRIPT 6 FOI ADICIONADO O "CLASS", USE ELE AO CRIAR CONSTRUCTOR FUNCTIONS AO INVÉS DE "FUNCTION". 
// As classes também servem para a criação de constructor functions, com a vantagem de que permitem a utilização de "getters" e "setters", não sofrem com hoisting, seu escopo é estrito, e também obrigam a utilização da palavra-chave "new" pra criação de novos objects. Por outro lado o impacto na performance é maior, mas não é nada demais, segundo minhas pesquisas, o impacto é insignificante.

// Syntax:
//? class Pessoa {
//?     constructor(nome, sobrenome) {
//?         this.nome = nome;
//?         this.sobrenome = sobrenome;
//?     };

//?     get nomeCompleto() {
//?         return this.nome + ' ' + this.sobrenome;
//?     };

//?     set nomeCompleto(novoNomeCompleto) {
//?         novoNomeCompleto = novoNomeCompleto.split(' ');
//?         this.nome = novoNomeCompleto.shift(' ');
//?         this.sobrenome = novoNomeCompleto.join(' ');
//?     };
//? };

//? const pessoa01 = new Pessoa('John', 'Travota');

//? console.log(pessoa01.nomeCompleto);

//? pessoa01.nomeCompleto = 'Geras da Silva';

//? console.log(pessoa01.nomeCompleto);