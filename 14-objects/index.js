//*                                                 OBJECTS

// Objetos JavaScript são contêineres para valores nomeados chamados propriedades.

// Exemplo. Você quer salvar os dados cadastrais de várias pessoas mas ainda não aprendeu objets, como você faria:

const nomeCompleto1 = `João Silva Costa`;
const celular1 = `(99) 98347-6277`;
const idade1 = 38;

const nomeCompleto2 = `Renata Barata Oliveira`;
const celular2 = `(99) 99366-2133`;
const idade2 = 25;

// Exemplo2. Usando Objects:

const pessoa1 = {
    nomeCompleto: `João Silva Costa`,
    //      Propriedade
    idade: 38,
    celular: `(99) 98347-6277`,
};

const pessoa2 = {
    nomeCompleto: `Renata Barata Oliveira`,
    idade: 25,
    celular: `(99) 99366-2133`,
};

// Os pares (name: values) em objetos JavaScript são chamados de propriedades


//# Acessando Propriedades do Objeto

//Você pode acessar as propriedades do objeto de duas maneiras:

console.log(`nomeCompleto: ${pessoa1.nomeCompleto}, idade: ${pessoa1.idade}, celular: ${pessoa1.celular}`);
//                                             OU
console.log(`nomeCompleto: ${pessoa1['nomeCompleto']}, idade: ${pessoa1['idade']}, celular: ${pessoa1['celular']}`);


//# Function para automatizar a criação de objetos:

function criaPessoas (nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade,
    };
};

const pessoa01 = criaPessoas('João', 'Silva', 45);
console.log(pessoa01);
const pessoa02 = criaPessoas('Valentine', 'Costa', 21);
console.log(pessoa02);
const pessoa03 = criaPessoas('Henrique', 'Azevedo', 30);
console.log(pessoa03);


//# Métodos de Objeto

// Os Objetos também podem ter métodos
// Um método é uma função armazenada como uma propriedade
// Métodos são ações que podem ser executadas dentro do objeto
// Os métodos são armazenados em propriedades como funções definições

const pessoa001 = {
    nome: 'Gislene',
    sobrenome: 'Graça',
    idade: 50,

    nomeCompleto() {
        return this.nome + ' ' + this.sobrenome
    },
    incrementaIdade() {
        this.idade++
    },
};

// No exemplo acima, a palavra "this" refere-se ao objeto pessoa001
// Ou seja, this.nome significa a propriedade nome desse(this) objeto.
// Ou seja, this.nome significa a propriedade nome da pessoa001


//# Acessando métodos do Objeto:

// Você acessa um método de objeto com a seguinte sintaxe:

console.log(pessoa001.nomeCompleto());

console.log(`A idade de ${pessoa001.nome} é: ${pessoa001.idade}`);
pessoa001.incrementaIdade();
console.log(`A idade de ${pessoa001.nome} é: ${pessoa001.idade}`);
pessoa001.incrementaIdade();
console.log(`A idade de ${pessoa001.nome} é: ${pessoa001.idade}`);

// Se você acessar um método sem os parênteses (), ele retornará a definição da função:

console.log(pessoa001.nomeCompleto);


//! Não declare cadeias de caracteres, números e booleanos como objetos!

// Quando uma variável JavaScript é declarada com a palavra-chave "new", a variável é criada como um objeto:

x = new String();        // Declara x como um objeto String
y = new Number();        // Declara y como um objeto Number
z = new Boolean();       // Declara z como um objeto Boolean

// Evite! Eles complicam seu código e diminuem a velocidade de execução.