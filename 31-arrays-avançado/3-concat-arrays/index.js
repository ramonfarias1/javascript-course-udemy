//# Concatenação de Arrays

//* Exemplo 01, usando .concat():

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2);
console.log(a3);

const a4 = a3.concat([7, 8, 9], 10, 'string', true, false);
console.log(a4);

//* Exemplo 02, usando ...spread:

const a01 = [1, 2 , 3];
const a02 = [4, 5, 6];
const a03 = [...a01, ...a02, ...[7, 8, 9], 10, 'string'];
console.log(a03);