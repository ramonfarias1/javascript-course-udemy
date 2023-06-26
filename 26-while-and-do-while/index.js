//# O loop (while)
// Executa um bloco de código desde que uma condição especificada seja verdadeira.

/* Sintaxe:
while (condição) {
    código a ser executado;
};
*/

//* Exemplo 1:

//? let i = 0;

//? while ( i <= 10) {
//?     console.log(`number${i}`);
//?     i++;
//     //! Nunca esqueça de incrementar o valor de "i", senão o loop será infinito e poderá travar o seu navegador e pc.
//? };

//* Exemplo 2:

//? function generateRandomNumber(max, min) {
//?     return Math.round(Math.random() * (max - min) + min);
//? };

//? const max = 50;
//? const min = 0;

//? let randomNumber = generateRandomNumber(max, min);

//? while (randomNumber !== 10) {
     // Enquanto essa condição for verdadeira o código ficará sendo executado em loop
//?     randomNumber = generateRandomNumber(max, min);
//?     console.log(randomNumber);
//? };

//# O loop (do while)
// Executa o bloco de código uma vez, antes de verificar se a condição é verdadeira, se a condição for verdadeira, ele repetirá o bloco de código.

/* Sintaxe:
do {
    código a ser executado
}
while (condition);
*/

function generateRandomNumber(max, min) {
    return Math.round(Math.random() * (max - min) + min);
};

const max = 50;
const min = 0;

let randomNumber = generateRandomNumber(max, min);

do {
    // o código será executado 1 vez antes da verificação da condição
    randomNumber = generateRandomNumber(max, min);
    console.log(randomNumber);
} while (randomNumber !== 10);
// Se a condição for verdadeira o código será executado novamente.