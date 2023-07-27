//# Para entendermos prototypes, temos que ver alguns conceitos antes:

// Constructor: É um método especial para criar e inicializar um object criado a partir de uma class. É um molde que gera novos objects.

// Instanciação: É o processo de criação de um object pela class. Quando chamados a class com a palavra-chave "new", estamos criando uma instancia da constructor function para criar o object.

// Definição do termo "Protótipo": Protótipo é o termo usado para se referir a algo que veio primeiro, que foi criado pela primeira vez, servindo de modelo ou molde para outras futuras criações.

//# Prototypes(Protópipos) no JavaScript:

// Todo object no JavaScript possui uma propriedade chamada "prototype" que é colocada no object no momento da criação do mesmo. Esse prototype (protótipo) atua como um modelo do qual herda métodos e propriedades, e ele está "linkado" á constructor function do object, então qualquer object criado por aquela constructor function vai ter acesso á esse prototype, tornando possível eles usaremos os métodos e propriedades que estão ali dentro.

// Quando tentamos acessar um método ou propriedade de um object, primeiro o JavaScript vai tentar encontrar eles dentro do próprio object, e depois a cadeia de prototypes é usada até o topo (null) até encontrar (ou não) o método ou propriedade que estamos querendo acessar.

// O JavaScript é baseado em protótipos para passar métodos e propriedades de um object para outro

//* Exemplo:
//* Caso tenhamos uma constructor function que cria várias pessoas com um método que mostra o nome completo delas, podemos jogar esse método dentro do prototype da constructor function, e assim todo object criado a partir daquela constructor function vai ter acesso á esse método pois todos object criado a partir dessa constructor function vão herdar esse prototype com o método dentro, fazendo com que não precise ter um método repetido para cada um dos objects tornando o sistema mais lento.

class Pessoa {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        // this.nomeCompleto = function() { // Cria um método dentro do próprio object
        //     console.log('Este método está dentro do object');
        //     return this.nome + " " + this.sobrenome;
        // };
    };

    nomeCompleto() { //  Cria um método no prototype do object
        console.log('Este método está dentro do prototype');
        return this.nome + " " + this.sobrenome;
    };
};

// Pessoa.prototype.nomeCompleto = function() { // Você pode colocar um método ou propriedade dessa forma também dentro do prototype
//     return this.nome + ' ' + this.sobrenome;
// };

//# NOTA: Caso tenha dois métodos iguais, um dentro de prototype e outro dentro do object, o método do object que será usado ao invés do que está dentro de prototype, por causa do chamado escopo "léxico".

//# NOTA: A cadeia do prototype funciona assim:
// p1 --> Pessoa.prototype --> Object.protoype.
// Esse Object.prototype seria o ultimo, o "pai de todos" os objects.

const p1 = new Pessoa('Carlos', 'Augusto', 33);
const p2 = new Pessoa('Rosa', 'Batista', 45);
const p3 = new Pessoa('Eduardo', 'Sampaio', 18);
const p4 = new Pessoa('Mateus', 'Costa', 22);
const p5 = new Pessoa('Chris', 'Everybody', 16);

console.log(p1.nomeCompleto()); // Cada chamada dessa vai usar o método nomeCompleto() que está dentro do prototype da class "Pessoa"
console.log(p2.nomeCompleto());
console.log(p3.nomeCompleto());
console.log(p4.nomeCompleto());
console.log(p5.nomeCompleto());

console.dir(new Date()); // Aqui vemos que não tem nenhum método ou propriedade dentro da constructor Date, mas sim dentro do seu prototype (veja no console do navegador);