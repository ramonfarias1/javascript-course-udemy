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

            enumerable: false, // Ativa ou Desativa a capacidade da propriedade de aparecer em iterações como no "for...in" ou como no "Object.keys()". Valor padrão é "false".

            value: quantidade, // Define um valor para a propriedade. Pode ser qualquer valor válido em Javascript (número, objeto, função, etc), por exemplo, podemos definir métodos aqui também. Valor padrão é "undefined".

            //? value: function() { // Aqui foi criado um método como valor.
            //?     return quantidade;
            //? },

            writable: false, // Define se o valor da propriedade pode ser alterado com um operador de atribuição(=). Valor padrão é "false".

            configurable: false, // Define se a propriedade pode ser deleta, e o mais importante, define se esses descritores podem ser re-configurados depois com outro método Object.defineProperty(). Valor padrão é "false".
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
            'quantidade': { // Ocorrerá um erro dizendo que essa propriedade não pode ser redefinida, pois na sua primeira configuração ela recebeu "configurable: false".
                enumerable: true,
                value: quantidade,
                writable: true,
                configurable: true,
            },
        });
    };
};

//# Nota:
/*
 - Por padrão, os valores adicionados usando Object.defineProperty() são imutáveis e não enumeráveis.
 - Se um descritor não contiver nenhuma das chaves "value", "writable", "get" e "set", ele será tratado como um descritor de dados. Se um descritor tem ambas as chaves "value" ou "writable" e "get" ou "set", uma exceção é lançada.
*/

const produto1 = new Produto('camisa', 9.99, 10);

produto1.quantidade = 39; // O valor não será atribuido a propriedade "quantidade", pois a mesma recebeu "writable: false"
delete produto1.quantidade; // Não será possível apagar se "configurable" estiver com o valor "false"

console.log(produto1);

//? console.log(produto1.quantidade());

for (let prop in produto1) {
    console.log(prop);
};

console.log(Object.keys(produto1));

console.log(Object.getOwnPropertyNames(produto1)); // Esse método mostra todas as propriedades mesmo se elas estiverem configuradas com "enumerable: false"