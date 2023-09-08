//# Exportação em linha individualmente

//? export const nome = 'kaka';
//? export const sobrenome = 'brasil';
//? const idade = 26;
// A constante "idade" não será exportada pois antes dela não tem a palavra-chave "export".

//? export function soma(x, y) {
//?     return x + y;
//? };

//? export class Pessoa {
//?     constructor(nome, sobrenome) {
//?         this.nome = nome;
//?         this.sobrenome = sobrenome;
//?     };
//? };

//# Exportação multipla dentro de chaves

//? const nome = 'kaka';
//? const sobrenome = 'brasil';
//? const idade = 26;

//? function soma(x, y) {
//?     return x + y;
//? };

//? class Pessoa {
//?     constructor(nome, sobrenome) {
//?         this.nome = nome;
//?         this.sobrenome = sobrenome;
//?     };
//? };

//? export { nome, sobrenome, idade, soma, Pessoa };

//# Renomeando Exportações

//? const nome = 'kaka';
//? const sobrenome = 'brasil';
//? const idade = 26;

//? function soma(x, y) {
//?     return x + y;
//? };

//? class Pessoa {
//?     constructor(nome, sobrenome) {
//?         this.nome = nome;
//?         this.sobrenome = sobrenome;
//?     };
//? };

//? export { nome as nome2, sobrenome as sobrenome2, idade as idade2, soma as soma2, Pessoa as Pessoa2 };

//# Exportação Padrão em linha Individualmente
// Nota: Exportação Padrão em linha não funciona com variáveis

// Nota2: Um arquivo pode conter várias exportações. No entanto, você só pode ter uma exportação padrão em um arquivo.

//? export const nome = 'kaka';
//? export const sobrenome = 'brasil';
//? export const idade = 26;

//? export function soma(x, y) {
//?     return x + y;
//? };

//? export default class Pessoa {
//?     constructor(nome, sobrenome) {
//?         this.nome = nome;
//?         this.sobrenome = sobrenome;
//?     };
//? };
// Esse exemplo de default é muito utilizado

//# Exportação Padrão de uma variável
// Para exportar uma variável como padrão tem que usar a exportação em bloco

const nome = 'kaka';
const sobrenome = 'brasil';
const idade = 26;

function soma(x, y) {
    return x + y;
};

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    };
};

export { nome as default, sobrenome, idade, soma, Pessoa } // Exportação em bloco

// Também podemos exportar functions anônimas como default:

//? export default (x, y) => x * y;