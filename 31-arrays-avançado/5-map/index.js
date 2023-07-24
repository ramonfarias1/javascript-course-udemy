// map() retorna um novo array com todos os elementos.

// map() não executa a funtion para elementos vazios.

// map() não altera o array original.

// Sintaxe:
//? array.map(function(currentValue, index, array), thisValue);

//* Exemplo01:
// Retorna o dobro dos valores

const numeros = [10, 17, 0, 5, 9, 1, 33,];

const dobro = numeros.map(valor => valor * 2);

console.log(dobro);

//* Exemplo02:
// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do object
// Adicione uma chave "id" em cada objeto

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const nomes = pessoas.map( obj => obj.nome);
console.log(nomes);

const removidoNomes = pessoas.map( obj => {
    const newObj = {...obj};
    delete newObj.nome;
    return newObj;
});
console.log(removidoNomes);

const pessoasComId = pessoas.map( (obj, indice) => {
    const newObj = {...obj};
    newObj.id = indice;
    return newObj;
});
console.log(pessoasComId);