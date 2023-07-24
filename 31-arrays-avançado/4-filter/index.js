// Filter sempre retorna um array com a mesma quantidade de valores ou menos.

//* Exemplo01
// Retorna numeros maiores que 10:

const numeros = [5, 11, 22, 7, 0, 1, 55, 37, 44, 6, 99];

const numerosFiltrados = numeros.filter( valor => valor > 10); // Também podemos pegar o "indice" e o "array" se quisermos.

console.log(numerosFiltrados);

//* Exemplo02:
// Retorne as pessoas que tem o nome maior que 5 letras
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a letra "a"

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const pessoasNomeMaiorQue5letras = pessoas.filter( obj => obj.nome.length > 5);

console.log(pessoasNomeMaiorQue5letras);

const pessoasComMaisDe50Anos = pessoas.filter( obj => obj.idade > 50);

console.log(pessoasComMaisDe50Anos);

const pessoasNomeTerminaComLetraA = pessoas.filter( obj => obj.nome.toLowerCase().endsWith('a'));

console.log(pessoasNomeTerminaComLetraA);