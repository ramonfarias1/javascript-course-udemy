//# Definindo o prototype de um object especificado como outro object ou um "null" ( Object.setPrototypeOf() )

//* Sintaxe:
//? Object.setPrototypeOf(obj, proto | null);

//* Parâmetros Object.setPrototypeOf(obj, proto | null):

// - obj = O object que terá seu prototype definido
// - proto = O novo prototype do object (um object ou um null)

//* Exemplo:

const objA = {
    chaveA: 'A'
};

const objB = {
    chaveB: 'B'
};

const objC = {
    chaveC: 'C'
};

Object.setPrototypeOf(objB, objA); // Aqui o objB recebeu o objA como prototype
console.log(objB.chaveA);

Object.setPrototypeOf(objC, objB); // Aqui o objC recebeu o objB como prototype e que o objB tem o objA como prototype
console.log(objC.chaveA);

console.dir(objC); // Ver no console do navegador

//! Nota: Alterar o prototype de um objeto é atualmente uma operação muito lenta em todos os navegadores e mecanismos JavaScript.

//# Retornando o prototype de um object especificado ( Object.getPrototypeOf() ):

//*Sintaxe:
//? Object.getPrototypeOf(obj);

//* Parâmetros de Object.getPrototypeOf(obj):

// - obj = O object cujo prototype será retornado

//* Exemplo:

const prototypeRetornado = Object.getPrototypeOf(objC);
console.log(prototypeRetornado);

//# Definindo métodos dentro do prototype de um object:

class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    };

    desconto(porcentagem) { // Esse método foi definido dentro do prototype
        this.preco = this.preco - (this.preco * (porcentagem / 100));
    };

    aumento(porcentagem) { // Esse método foi definido dentro do prototype
        this.preco = this.preco + (this.preco * (porcentagem / 100));
    };
};

const produto1 = new Produto('camisa', 100);
console.log(produto1.preco);

produto1.desconto(15);
console.log(produto1.preco);

produto1.aumento(15);
console.log(produto1.preco);

//# Definindo o prototype da class "Produto" em um object literal:

const produto2 = { // Object literal
    nome: 'calça',
    preco: 19.90
};

Object.setPrototypeOf(produto2, Produto.prototype); // Foi definido o prototype da class "Produto" no object literal "produto2"

console.log(produto2.preco);

produto2.desconto(30);
console.log(produto2.preco);

produto2.aumento(30);
console.log(produto2.preco);

console.dir(produto1);
console.dir(produto2);

//# Criando um novo object e usando um object já existente como o prototype desse novo object recém-criado ( Object.create() ):

//* Sintaxe:
//? Object.create( proto, propertiesObject(Opcional) );

//* Parâmetros:
// - proto = O object que deve ser o prototype do novo object recém-criado
// - propertiesObject (opcional) =  Um objeto cujas propriedades próprias enumeráveis especificam descritores de propriedade a serem adicionados ao objeto recém-criado. Essas propriedades correspondem ao segundo argumento do Object.defineProperties().

//* Exemplo:

const objectNormal = Object.create(Object.prototype); // utilizando "Object.prototype" cria-se apenas um object normal
console.log(objectNormal);

const produto3 = Object.create(Produto.prototype, { // O object "produto3" vai receber o prototype da class "Produto"
    nome: {
        value: 'sapato',
        enumerable: true,
        writable: true,
        configurable: true,
    },

    preco: {
        value: 150,
        enumerable: true,
        writable: true,
        configurable: true,
    }
});

produto3.tamanho = 42; // Pode-se adicionar uma propriedade ao object assim também

console.log(produto3);

console.log(produto3.preco);

produto3.desconto(50); // Como o object "produto3" recebeu o prototype da class "Produto", então ele pode utilizar os métodos que estão neste prototype
console.log(produto3.preco);

produto3.aumento(50);
console.log(produto3.preco);