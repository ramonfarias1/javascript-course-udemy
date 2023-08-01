// Sintaxe:
//? array.reduce(function(acumulador, Valor, Index, array), initialValue);

//* Exemplo01:
// Some todos os numeros (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)

const numeros = [55, 21, 6, 1, 102, 9];

const somaTotal = numeros.reduce( (acumulador, valor, indice, array) => acumulador += valor, 0); // 0 foi definido como valor inicial do acumulador. Se não definirmos um valor inicial para o acumulador, ele usará o primeiro valor do array como inicial, nesse caso, o 55.
console.log(somaTotal);

const pares = numeros.reduce((acumulador, valor) => {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);
console.log(pares);

const dobro = numeros.reduce((acumulador, valor) => {
    acumulador.push(valor * 2);
    return acumulador;
}, []);
console.log(dobro);

//* Exemplo02:
// Retorne a pessoa mais velha

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 70},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 51},
    {nome: 'Wallace', idade: 47},
];

const maisVelha = pessoas.reduce((acumulador, obj) => {
    if (acumulador.idade > obj.idade) return acumulador;
    return obj;
});
console.log(maisVelha);