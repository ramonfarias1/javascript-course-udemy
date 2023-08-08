// Classes em JavaScript são introduzidas no ECMAScript 2015 e são simplificações da linguagem para as heranças baseadas nos protótipos. A sintaxe para classes não introduz um novo modelo de herança de orientação a objetos em JavaScript. Classes em JavaScript provêm uma maneira mais simples e clara de criar objetos e lidar com herança.

//# Sintaxe:
// Use a palavra-chave: class, para criar uma classe.

// Sempre adicione um método chamado: constructor().

//? class ClassName {
//?     constructor() {
//?         ...
//?     };
//? };

//* Exemplo:

class Pessoa {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome,
        this.idade = idade;
    }
};

const p1 = new Pessoa('julius', 'pai do chris', 40);
console.log(p1);

//! Classes não são afetadas pelo Hoisting

// A classe também pode ser uma expressão:

// Anônima
const Pessoa2 = class {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome,
        this.idade = idade;
    };
};

// Nomeada
const Pessoa3 = class Pessoa3 {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome,
        this.idade = idade;
    };
};

const p2 = new Pessoa2('José', 'Batista', 55);
console.log(p2);

const p3 = new Pessoa3('Antonio', 'Soares', 35);
console.log(p3);

//! Nota: As expressões de classe também não são afetadas pelo hoisting

//# O método Constructor
/* O método construtor é um método especial:

 - Tem que ter o nome exato "construtor"
 - Ele é executado automaticamente quando um novo objeto é criado
 - Ele é usado para inicializar propriedades de objeto
 - Se você não definir um método de construtor, JavaScript adicionará um método de construtor vazio.
*/

//# Métodos de Classe
// Os métodos de classe são criados com a mesma sintaxe que os métodos de objeto.

// Use a palavra-chave "class" para criar uma classe.

// Sempre adicione um método: constructor().

// Em seguida, adicione qualquer número de métodos.

// Você pode enviar argumentos para os parâmetros dos métodos de classe se precisar.

//* Sintaxe:
//? class ClassName {
//?     constructor() {...};

//?     metodo1(param1, param2, ...) {...};

//?     metodo2(param1, param2, ...) {...};

//?     metodo3(param1, param2, ...) {...};
//?     ...
//? };

//* Exemplo:

class Pessoa4 {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    };

    nomeCompleto() {
        return this.nome + " " + this.sobrenome;
    };
};

const p4 = new Pessoa4('gustavo', 'guanabara', 43);
console.log(p4.nomeCompleto());