//# Math.floor(x: number): number
// Arredonda um número decimal para baixo

let num1 = 3.14156564;

let resultado = Math.floor(num1);
console.log(resultado);

//# Math.ceil(x: number): number
// Arredonda um número decimal pra cima

resultado = Math.ceil(num1);
console.log(resultado);

//# Math.round(x: number): number
// Arrendonda para o inteiro mais próximo
// 3.54 será arredondado para 4
// 3.49 será arredondado para 3

num1 = 3.546789;
resultado = Math.round(num1); // Arredondado para 4
console.log(resultado);

num1 = 3.497288;
resultado = Math.round(num1); // Arredondado para 3
console.log(resultado);

//# Math.sqrt(x: number): number
// Retorna a raíz quadrada de um número

console.log(Math.sqrt(25));

console.log(Math.sqrt(9));

//# Math.max(...values: number): number | Math.min(...values: number): number
//Retorna o maior e menor número respectivamente

console.log(Math.max(5, 22, 9, -33, 487, 1349, -4, 11)); // Retorna o maior

console.log(Math.min(5, 22, 9, -33, 487, 1349, -4, 11)); // Retorna o menor

//# Math.random(): number
// Retorna um número aleatório entre 0 e 1

let numRandom = Math.random();
console.log(numRandom);

numRandom = Math.round(Math.random() * (10 - 5) + 5); // Retorna um número entre 10 e 5
console.log(numRandom);