//Exemplo de um desafio que usa Atribuição e Desestruturação de Arrays:

//? let a = 'a';

//? let b = 'b';

//? let c = 'c';

//? const letras = ['b', 'c', 'a'];

//? [a, b, c] = letras;

//? console.log(a, b, c);

// Exemplo, o que normalmente fazemos quando queremos pegar cada valor de um array e colocar em uma variável diferente:

//? const nomePessoas = ['killua', 'gon', 'guts', 'griffith', 'canute', 'thorffin'];

//? const nome0 = nomePessoas[0];
//? const nome1 = nomePessoas[1];
//? const nome2 = nomePessoas[2];
//? const nome3 = nomePessoas[3];
//? const nome4 = nomePessoas[4];
//? const nome5 = nomePessoas[5];
//? console.log(nome3);

// Usando Atribuição e Desestruturação:

//? const nomePessoas = ['killua', 'gon', 'guts', 'griffith', 'canute', 'thorffin'];

//? const [nome0, nome1, nome2, nome3] = nomePessoas;

//? console.log(nome0, nome1, nome2, nome3);

// Utilizando o operador "..."(rest), para pegar o resto dos valores:

//? const nomePessoas = ['killua', 'gon', 'guts', 'griffith', 'canute', 'thorffin'];

//? const [nome0, nome1, nome2, nome3, ...resto] = nomePessoas;

//? console.log(nome0, nome1, nome2, nome3);
//? console.log(resto);

// Utilizando a ","(vírgula) para pular valores e pegar valores separados:

//? const nomePessoas = ['killua', 'gon', 'guts', 'griffith', 'canute', 'thorffin'];

//? const [, nome2, nome3, , , nome6] = nomePessoas;

//? console.log(nome2, nome3, nome6);

// Arrays dentro de Arrays:

//                     0            1            2
//                  0  1  2      0  1  2      0  1  2
//? const numeros = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ];

//? console.log(numeros[1][0]);

// Atribuição e Desestruturação com Arrays dentro de Arrays:

//? const numeros = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ];

//? const [[, dois], , [, , nove]] = numeros

//? console.log(dois, nove);

// Maneira mais fácil de fazer Atribuição e Desestruturação com Arrays dentro de Arrays:

const numeros = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ];

const [lista1, lista2, lista3] = numeros;

console.log(lista1[1], lista3[2]);