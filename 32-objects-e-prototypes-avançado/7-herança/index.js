// O termo "Herança" é muito usado para descrever que as características de um objeto são passadas para outro objeto. Assim como uma filha ou filho pode herdar características da sua mãe ou pai (geneticamente). Por isso estamos usando esse termo para descrever o comportamento desejado. Além disso, a maioria das literaturas, incluindo as documentações (como MDN) citam a palavra herança.

// Porém, Javascript não é uma linguagem que apresenta essa característica em específico, portanto não existe "herança" aqui. O que ocorre, na verdade, é "delegação". Esse seria o termo mais correto para descrever "Herança" em JS.

//* Exemplo, quando fazemos algo como:

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

function Camisa(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
};

Camisa.prototype = Object.create(Produto.prototype);

Camisa.prototype.constructor = Camisa; // Retorna o constructor original de "Camisa" para dentro do prototype da mesma.

Camisa.prototype.aumento = function(porcentagem) { // Adiciona o método "aumento" dentro do prototype de "Camisa";
    this.preco = this.preco + (this.preco * (porcentagem / 100));
};

const camisa01 = new Camisa('manga longa', 39.90, 'rosa');
camisa01.aumento(10); // Aumentou 10% no preço da camisa
console.log(camisa01);

//* Mais especificamente no trecho:
//? Camisa.prototype = Object.create(Produto.prototype);

// Estamos, claramente, falando que o "Camisa.prototype" é um novo objeto vazio que tem como protótipo "Produto.prototype". Dessa forma, estamos adicionando "Camisa.prototype" na cadeia de protótipos de "Produto". Por consequência, tudo o que não existir em "Camisa" nem em "Camisa.prototype" será delegado para "Produto.prototype" (e assim por diante até chegar no topo da cadeia de protótipos). Por isso vejo o termo delegação como mais adequado para este comportamento.

//* Outro exemplo:

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,

        get: function() {
            return estoque;
        },

        set: function(novoValor) {
            if (typeof novoValor !== 'number') return;
            estoque = novoValor;
        }
    });
};

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca01 = new Caneca('caneca larga', 25, 'porcelana', 5);
caneca01.desconto(5); // Diminuiu 5 reais no preço da caneca
caneca01.estoque = 8;

console.log(caneca01);
console.log('caneca em estoque: ' + caneca01.estoque);