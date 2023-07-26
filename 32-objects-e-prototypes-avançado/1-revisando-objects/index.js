//# Criando object literal e acessando chaves

const pessoa = {
    nome: 'Chris',
    sobrenome: 'Redfield',
};
const chave = 'nome';
console.log(pessoa.nome); // Notação de ponto.
console.log(pessoa[chave]); // Notação de colchete['']

//# Criando object com a constructor function

const pessoa1 = new Object();
pessoa1.nome = 'Claire';
pessoa1.sobrenome = 'Redfield';
console.log(pessoa1);

//# Deletando chaves do object

delete pessoa1.nome;
console.log(pessoa1);

//# Métodos do object

pessoa1.nome = 'Claire'; // Adicionei o nome novamente depois dele ser deletado
pessoa1.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
};
console.log(pessoa1.nomeCompleto());

pessoa1.idade = 30;
pessoa1.getDataNascimento = function() {
    const anoAtual = new Date().getFullYear();
    return anoAtual - this.idade;
};
console.log(pessoa1.getDataNascimento());

//# Iterando sobre Objects
// Apenas as chaves do object são iteraveis, os valores não são.

for (let chave in pessoa1) {
    console.log(pessoa1[chave]); // Aqui está um exemplo da utilização de notação de colchetes
};

//# Factory Function
// Function que retorna um object

function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return nome + " " + sobrenome;
        },

        set nomeCompleto(novoNome) {
            nome = novoNome;
        },
    };
};
const p1 = criaPessoa('Jax', 'Saibot');
console.log(p1.nomeCompleto);
p1.nomeCompleto = 'Noob';
console.log(p1.nomeCompleto);

//# Constructor Function
// Também retorna um object
// A palavra-chave "new" cria um object vazio{}, e atrela o "this" a esse object.

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = function() {
        return this.nome + " " + this.sobrenome;
    };
};
const pess1 = new Pessoa('Kuai Liang', 'Lin Kuei');
console.log(pess1);
console.log(pess1.nomeCompleto());

//# Classes

class Pessoa2 {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        // Object.freeze(this); // Congela qualquer object criado por essa constructor function
    };
    get nomeCompleto() {
        return this.nome + " " + this.sobrenome;
    };

    set nomeCompleto(novoNome) {
        this.nome = novoNome;
    };
};
const person1 = new Pessoa2('Hanzo', 'Saibot');
console.log(person1.nomeCompleto);
person1.nomeCompleto = 'Bihan';
console.log(person1.nomeCompleto);

//# Congelando um object Object.freeze()
// O método JavaScript Object.freeze() impede que as propriedades existentes sejam modificadas e também impede que as novas propriedades sejam adicionadas no objeto específico.

Object.freeze(person1);

person1.idade = 30;
person1.nomeCompleto = 'Test';
delete person1.nome;
person1.falaOi = () => console.log('oi');
person1.falaOi();
console.log(person1.nomeCompleto); // Vai ocorrer um erro pois o object está congelado
console.log(person1);

//! Freeze também funciona com arrays