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

const nomePessoas = ['killua', 'gon', 'guts', 'griffith', 'canute', 'thorffin'];

const [nome0, nome1, nome2, nome3, nome4, nome5] = nomePessoas;

console.log(nome0, nome1, nome2, nome3, nome4, nome5);