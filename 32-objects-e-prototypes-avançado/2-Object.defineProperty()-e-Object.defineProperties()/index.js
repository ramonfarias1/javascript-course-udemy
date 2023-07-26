// O método Object.defineProperty() adiciona uma propriedade ou modifica uma propriedade existente em um object e retorna o object.

// O método Object.defineProperties() faz a mesma coisa, mas com várias propriedades.

//# Sintaxe para Object.defineProperty():

//? Object.defineProperty(obj, prop, {
//?     descritores,
//? });

//# Parâmetros para Object.defineProperty():
//  - obj = o objeto sobre o qual definir a propriedade ( Pode colocar "this" aqui se o método estiver dentro do object que queremos modificar, se não, coloca o nome do object).

//  - prop = o nome da propriedade a ser criada e/ou modificada. Caso queira criar uma nova propriedade, deve colocar o nome dela como uma string, entre aspas"".

//  - {descritores} = um object{ com os descritores dentro para a propriedade que está sendo criada e/ou modificada }.

//# Sintaxe para Object.defineProperties():
//? Object.defineProperties(obj, {
//?     prop1: {
//?         descritores,
//?     },
//?     prop2: {
//?         descritores,
//?     },
//? });

//# Parâmetros para Object.defineProperties():
//  - obj = o objeto sobre o qual definir a propriedade ( Pode colocar "this" aqui se o método estiver dentro do object que queremos modificar, se não, coloca o nome do object).

//  - {props} = um object{} cujo as chaves do mesmo são os nomes das propriedades a serem criadas e/ou modificadas e cujo o valor dessas chaves contém outro object{} com os descritores dentro. Caso queira criar uma nova propriedade, deve colocar o nome dela como uma string, entre aspas"".

class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;

        Object.defineProperty(this, 'quantidade', { // Aqui eu usei "this" pois o método está dentro do object que quero modificar

            enumerable: true, // Ativa ou Desativa a capacidade da propriedade de aparecer em iterações como no "for...in" ou como no "Object.keys()". Valor padrão é "false".

            value: quantidade, // Define um valor para a propriedade. Pode ser qualquer valor válido em Javascript (número, objeto, função, etc). Valor padrão é "undefined". Exemplo: podemos colocar functions aqui também.

            //? value: function() { // Aqui foi criado um método como valor.
            //?     return quantidade;
            //? },

            writable: true, // Define se o valor da propriedade pode ser alterado com um operador de atribuição(=)

            configurable: true, // Define se a propriedade pode ser deleta, e o mais importante, define se esses descritores podem ser re-configurados depois com outro método Object.defineProperty().
        });

        Object.defineProperties(this, {
            nome: {
                enumerable: true,
                value: nome,
                writable: true,
                configurable: true,
            },
            preco: {
                enumerable: true,
                value: preco,
                writable: true,
                configurable: true,
            },
            'quantidade': {
                enumerable: true,
                value: quantidade,
                writable: true,
                configurable: true,
            },
        });
    };
};

const produto1 = new Produto('camisa', 9.99, 10);
console.log(produto1);

//! >>>>>>>>>Object.getOwnPropertyNames<<<<<<<<<<<<<<<<<