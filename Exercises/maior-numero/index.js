//? const numero1 = Math.round(Math.random() * (20 - 0) - 0);
//? const numero2 = Math.round(Math.random() * (20 - 0) - 0);

//? console.log(`numero1: ${numero1}, numero2: ${numero2}`);

//? function obterMaiorNumero(n1, n2) {
//?     if (n1 > n2) {
//?         return n1;
//?     } else {
//?         return n2;
//?     };
//? };

//? const maiorNumero = obterMaiorNumero(numero1, numero2);
//? console.log(`Maior: ${maiorNumero}`);

//# Melhorado+

//? const numero1 = Math.round(Math.random() * (20 - 0) - 0);
//? const numero2 = Math.round(Math.random() * (20 - 0) - 0);

//? console.log(`numero1: ${numero1}, numero2: ${numero2}`);

//? function obterMaiorNumero(n1, n2) {
//?     if (n1 > n2) return n1;
//?     return n2;
     // Se o n1 for maior que o n2, é retornado o n1, e a função termina aqui, caso n1 não for maior que o n2, a condição não será verdadeira e será retornado o valor de n2. Então não é necessário colocar else.
//? };

//? const maiorNumero = obterMaiorNumero(numero1, numero2);
//? console.log(`Maior: ${maiorNumero}`);

//# Melhorado++

//? const numero1 = Math.round(Math.random() * (20 - 0) - 0);
//? const numero2 = Math.round(Math.random() * (20 - 0) - 0);

//? console.log(`numero1: ${numero1}, numero2: ${numero2}`);

//? function obterMaiorNumero(n1, n2) {
//?     return n1 > n2 ? n1 : n2;
     // Usando operador ternário
//? };

//? const maiorNumero = obterMaiorNumero(numero1, numero2);
//? console.log(`Maior: ${maiorNumero}`);

//# Melhorado+++

//? const numero1 = Math.round(Math.random() * (20 - 0) - 0);
//? const numero2 = Math.round(Math.random() * (20 - 0) - 0);

//? console.log(`numero1: ${numero1}, numero2: ${numero2}`);

//? const maiorNumero = (n1, n2) => n1 > n2 ? n1 : n2; 
// Foi utilizado arrow function, e quando temos apenas uma linha na arrow function podemos eliminar o "return" e as "{}(chaves)".
//? console.log(`Maior: ${maiorNumero(numero1, numero2)}`);

//# Melhorado++++

const maiorNumero = (n1, n2) => n1 > n2 ? n1 : n2; // Foi utilizado arrow function, e quando temos apenas uma linha na arrow function podemos eliminar o "return" e as "{}(chaves)".
console.log(`Maior: ${maiorNumero(Math.round(Math.random() * (20 - 0) - 0), Math.round(Math.random() * (20 - 0) - 0))}`);