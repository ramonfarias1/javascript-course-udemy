                                                //* ARRAYS

// Array é uma variável especial que pode conter mais de um valor.

// Pode ter mais de um tipo primitivo em um array, mas isso não é uma boa prática de programação, o certo é ter somente o mesmo tipo primitivo em um array.

// Assim como nas Strings, os arrays também são indexados. E cada índice é um valor do array.

const valoresMisturados = ['string', 10, true, false, null, undefined]; // Não é uma boa prática de programação
console.log(valoresMisturados);

//                0        1         2 = indices
const nomes = ['ramon', 'kauan', 'reymond']; // É uma boa prática de programação
console.log(nomes);

//# array[index]
// Retorna o valor de um índice do array

const carros = ['gol', 'celta', 'hb20'];
console.log(carros[0]);
console.log(carros[1]);
console.log(carros[2]);

console.log(carros[50]); // Retorna Undefined pois esse índice não existe no array

//# array[index] = valor
// Substitui o valor do índice informado no array
// Se o índice informado não existir ele criará esse índice e colocara o valor informado nele.

carros[0] = 'hilux';
carros[1] = 'S10';
carros[2] = 'Fusca';
carros[3] = 'Corola'; // Criou um novo índice e colocou 'Corola' como valor"
console.log(carros);

//# array.length
// Retorna o tamanho do array

console.log(carros.length);

carros[carros.length] = 'Uno'; // Pode-se adicionar um valor ao final do array utilizando dessa maneira
console.log(carros);

//# array.push('valor')
// Adiciona um valor ao final do array

carros.push('Pálio');
console.log(carros);

//# array.unshift('valor)
// Adiciona um valor ao início do array e move os outros para frente

carros.unshift('Prisma');
console.log(carros);

//# array.pop()
// Remove o último valor do array e retorna o mesmo

const valorRemovidoDoFinal = carros.pop();
console.log(valorRemovidoDoFinal);
console.log(carros);

//# array.shift()
// Remove o primeiro valor do Array e retorna o mesmo

const valorRemovidoDoInicio = carros.shift();
console.log(valorRemovidoDoInicio);
console.log(carros);

//# delete array[index]
// Remove o valor de um índice mas não remove o índice, ficando com um elemento undefined

delete carros[1];
console.log(carros);
console.log(carros[1]);

//# array.slice(indexStart, indexEnd | undefined)
// Retorna um ou mais valores de um array

const valoresRetornados = carros.slice(0, 3);
console.log(valoresRetornados);

console.log(carros.slice(0, -3)); // Mostra todos os valores menos os 3 finais

console.log(carros.slice(-1)); // Mostra somente o valor final

console.log(carros.slice(-3)); // Mostra os 3 valores finais

//# array instanceOf Array
// Verifica se uma variável é um array

const pessoas = ['renata', 'carlos', 'joão'];
const pessoa = 'fernando';

console.log(pessoas instanceof Array); // True
console.log(pessoa instanceof Array); // False

console.log(typeof pessoas);