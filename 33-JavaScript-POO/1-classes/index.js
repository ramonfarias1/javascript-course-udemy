// Classes em JavaScript são introduzidas no ECMAScript 2015 e são simplificações da linguagem para as heranças baseadas nos protótipos. A sintaxe para classes não introduz um novo modelo de herança de orientação a objetos em JavaScript. Classes em JavaScript provêm uma maneira mais simples e clara de criar objetos e lidar com herança.

//# Definindo e Declarando classes:
// As Classes são, de fato, "funções especiais", e, assim como você pode definir "function expressions" e "function declarations", a sintaxe de uma classe possui dois componentes: "class expressions" e "class declarations".

// Uma maneira de definir uma classe é usando uma declaração de classe. Para declarar uma classe, você deve usar a palavra-chave "class" seguida pelo nome da classe (no exemplo abaixo, usamos o nome "Pessoa").

//* Exemplo:

class Pessoa {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome,
        this.idade = idade;
    };

    falar() {
        console.log(`${this.nome} ${this.sobrenome} está falando...`);
    };
};

const p1 = new Pessoa('julius', 'pai do chris', 40);
console.log(p1);
p1.falar();



//* Exemplo com Expressão:

// Anônima
const Pessoa2 = class {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome,
        this.idade = idade;
    };
    falar() {
        console.log(`${this.nome} ${this.sobrenome} está falando...`);
    };
};

// Nomeada
const 

const p2 = new Pessoa2('José', 'Batista', 55);
console.log(p2);
p2.falar();

// Assim como as expressões de função, as expressões de classe podem ser anônimas ou ter um nome diferente da variável à qual estão atribuídas. No entanto, ao contrário das declarações de função, as declarações de classe têm as mesmas restrições de zona morta temporal que ou e se comportam como se não fossem içadas.let const