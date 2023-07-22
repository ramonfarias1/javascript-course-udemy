// O método splice adiciona e/ou remove valores de um array

// Retorna os valores removidos em outro array

// Esse método substitui o array original.

// Syntax:
//? array.splice(indice, apagar, valor1, valor2, ....., valorX);

// indice = A posição para adicionar/ remover valores
// apagar = Número de valores que quer apagar ( opcional )
// valor1, valor2... = valores á ser adicionados ( opcional )

//* Exemplos:
//               -4         -3         -2        -1
//                0          1          2         3
const nomes = ['sergio', 'gordao', 'foguetes', 'renato'];

// Removendo valores:

//? let nomesRemovidos = nomes.splice(1, 2);

//? console.log(nomes, nomesRemovidos);

// Removendo utilizando indice Negativo:

//? let nomesRemovidos = nomes.splice(-4, 2);

//? console.log(nomes, nomesRemovidos);

// Adicionando valores:

//? nomes.splice(2, 0, 'baka', 'bojji');

//? console.log(nomes);

// Adicionando valores usando índice negativo:

//? nomes.splice(-2, 0, 'baka', 'bojji');

//? console.log(nomes);

// Substituindo o shift():

//? let nomesRemovidos = nomes.splice(0, 1);

//? console.log(nomes, nomesRemovidos);

// Substituindo o pop():

//? let nomesRemovidos = nomes.splice(-1, 1);

//? console.log(nomes, nomesRemovidos);

// Substituindo o unshift():

//? nomes.splice(0, 0, 'rosana');

//? console.log(nomes);

// Substituindo o push();

nomes.splice(nomes.length, 0, 'igor'); // Pode-se usar MAX_VALUE também

console.log(nomes);