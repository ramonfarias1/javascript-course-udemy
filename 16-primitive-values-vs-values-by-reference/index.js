/*
 # Primitivos (Imutáveis): String, Number, Boolean, Undefined, Null, Bigint e Symbol
*/

let nome = 'ramon';
nome = 'kauan'; // Nesse exemplo não estamos modificando o valor primitivo em si, apenas foi trocado o valor armazenado na variável

nome = 'Gael';
nome[0] = 'R';
console.log(nome[0], nome); // Como sabemos, as String são indexadas, por isso neste exemplo tentamos alterar a letra "G" que está no índice 0 para a letra "R", MAS, não aconteceu nada, pois valores primitivos em si são imutáveis.

let A = 'A';
let B = A; // Neste exemplo o valor de A foi copiado para B, então se alterarmos o valor de A, o valor de B continuará sendo o mesmo, pois com tipos primitivos quando falamos que uma variável recebe o valor de outra, nesse caso, B recebe A, o que estamos fazendo é uma cópia do valor da variável para outra variável.
console.log(A, B);
A = 'outra coisa';
console.log(A, B);


//# Referência (Mutáveis): Arrays, Objects, Functions

let a = [1, 2, 3];
let b = a;
let c = b;
console.log(a, b); // Neste exemplo o valor de (b) e (c) sempre vão ser o valor de (a) e vice-versa, pois (b) e (c) apontam para o mesmo valor de (a) na memória, eles não são copiados.
a.push(4);
console.log(a, b);
b.pop();
console.log(a, b);
console.log(c);


//# O operador Spread ...

a = [1, 2, 3];
b = [...a]; //  Adicione três pontinhos... dentro de colchetes[] para arrays ou chaves{} para objects e o nome da variável, por exemplo, [...a] ou {...a}, para copiar o valor de um array ou object ao invés de referência-lo.
c = b;
console.log(a, b, c);
b.push('valorAdicionado');
console.log(a, b, c);
c.shift();
console.log(a, b, c);


//# Com Objects

const pessoaA = {
    nome: 'ramon',
    sobrenome: 'farias',
};

//const pessoaB = pessoaA
const pessoaB = {...pessoaA} // Usando Spread ...
console.log(pessoaA)
console.log(pessoaB)
pessoaA.nome = 'carlos'
console.log(pessoaA)
console.log(pessoaB)