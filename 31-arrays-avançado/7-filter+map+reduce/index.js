// Unindo filter + map + reduce

//* Exemplo:
// Retorne a soma do dobro de todos os pares
// 1 - Filtrar pares
// 2 - Dobrar valores
// 3 - Reduzir (somar tudo)

const numeros = [4, 77, 21, 0, 3, 37, 55, 100, 8];

const somaDobroPares = numeros
.filter(( valor => valor % 2 === 0))
.map( valor => valor * 2)
.reduce( (acumulador, valor) => acumulador + valor);
console.log(somaDobroPares);