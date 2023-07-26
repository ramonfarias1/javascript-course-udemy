// Getters e Setters são propriedades de acessador

/* No JavaScript, as propriedades de acessador são métodos que obtêm ou definem o valor de um objeto. Para isso, utilizamos estas duas palavras-chave:

 - (get) = para definir um método como getter para obter o valor da propriedade do object
 - (set) = para definir um método como setter para alterar o valor da propriedade do object
*/
//# Nota: Ao definir um método como getter ou setter, acessamos ele como propriedade e não como método, então não é preciso os parênteses() no final do método para chamalo.

class Produto {
    constructor(nome, preco, quantidade) {
        Object.defineProperties(this, {
            'nome': {
                configurable: false,
                enumerable: true,
                get() {
                    console.log('obtendo nome...');
                    return nome;
                }
            },
            'preco': {
                configurable: false,
                enumerable: true,
                get() {
                    console.log('obtendo preço...');
                    return preco;
                },

                set(novoPreco) {
                    if (typeof novoPreco !== 'number') throw new TypeError('O preço não é um número.');
                    console.log('Colocando novo preço...')
                    preco = novoPreco;
                    //? this.preco = novoPreco;
                    // Nunca use a propriedade do object, pois criará um loop, se quiser armazenar o valor crie uma variável ou use o parâmetro da function mesmo.
                }
            },
            'quantidade': {
                configurable: false,
                enumerable: true,
                get() {
                    console.log('obtendo quantidade...');
                    return quantidade;
                },

                set(novaQuantidade) {
                    if (typeof novaQuantidade !== 'number') throw new TypeError('A quantidade não é um número.');
                    console.log('colocando nova quantidade...');
                    quantidade = novaQuantidade;
                    //? this.quantidade = novaQuantidade;
                    // Nunca use a propriedade do object, pois criará um loop, se quiser armazenar o valor crie uma variável ou use o parâmetro da function mesmo.
                }
            }
        });
    };
};

const p1 = new Produto('camisa', 19.90, 11);

console.log(p1);

console.log(p1.nome);
p1.nome = 'calça jeans'; // o valor de nome não vai ser alterado pois ele não tem um setter
console.log(p1.nome);

console.log(p1.preco);
p1.preco = 10.50;
console.log(p1.preco);

console.log(p1.quantidade);
p1.quantidade = 5;
console.log(p1.quantidade);