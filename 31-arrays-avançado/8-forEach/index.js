// O método forEach() chama uma function para cada elemento de um array.

// Esse método também é outra forma de iterar sobre arrays

// O método não é executado para elementos vazios.

// Sintaxe:
//? array.forEach(function(currentValue, index, array), thisValue);

//* Exemplo01:

const pessoas = ['João', 'Marcia', 'Lucas', 'Gustavo'];

pessoas.forEach( (valor, indice, array) => {
    console.log(valor, indice, array);
});

//* Exemplo02, soma total dos numeros:

const numeros = [10, 22, 8, 0, 1, 100];

let total = 0;
numeros.forEach( valor => {
    total += valor;
});
console.log(total);