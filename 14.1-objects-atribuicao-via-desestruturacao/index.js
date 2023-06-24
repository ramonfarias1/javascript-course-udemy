// Colocando os valores do objeto dentro de variáveis sem usar desestruturação:

//? const pessoa = {
//?     nome: 'Lucius',
//?     sobrenome: 'Artorios',
//?     idade: 50,
//?     endereco: {
//?         numero: 666,
//?         rua: 'mileto',
//?         bairro: 'britânia',
//?     },
//? };

//? const nome = pessoa.nome;

//? const sobrenome = pessoa.sobrenome;

//? const idade = pessoa.idade;

//? const rua = pessoa.endereco.rua;

//? console.log(nome, sobrenome, idade, rua);

// Usando desestruturação:

//? const pessoa = {
//?     nome: 'Lucius',
//?     sobrenome: 'Artorios',
//?     idade: 50,
//?     endereco: {
//?         numero: 666,
//?         rua: 'mileto',
//?         bairro: 'britânia',
//?     },
//? };

//? const {nome: n = 'Não existe', sobrenome: s, idade, endereco:{rua: r, numero: num}} = pessoa;
//? console.log(n, s, idade, r, num);
//* Notas:
//* - Você pode atribuir um valor default á variável pra quando não existir essa chave dentro do objeto.
//* - Você pode colocar outro nome diferente na variável, sem precisar ser o nome da chave, como mostrado na chave "nome" que recebeu "n" e "sobrenome" que recebeu "s".

// Usando o operador "..."(rest):

const pessoa = {
    nome: 'Lucius',
    sobrenome: 'Artorios',
    idade: 50,
    endereco: {
        numero: 666,
        rua: 'mileto',
        bairro: 'britânia',
    },
};

const {nome, sobrenome, ...resto} = pessoa;

console.log(nome, sobrenome);
console.log(resto);