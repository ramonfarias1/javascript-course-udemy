// "for" cria um loop com 3 expressões opcionais

//# Sintaxe:
/*
for (expressão 1; expressão 2; expressão 3) {
    código a ser executado;
};
*/

/*
 - A expressão 1 é executada (uma vez) antes da execução do bloco de código.
 - A expressão 2 define a condição para executar o bloco de código.
 - A expressão 3 é executada (sempre) após a execução do bloco de código.
*/
//* Exemplo:
//            1         2       3
// i = índice
//? for ( let i = 0 ; i <= 5 ; i++) {
//?     console.log(`número ${i}`);
//? };

//# A partir do exemplo acima, você pode ler:
/*
 - A expressão 1 define uma variável antes do início do loop (i = 0).
 - A expressão 2 define a condição para que o loop seja executado (i deve ser menor ou igual a 5).
 - A expressão 3 aumenta um valor (i++) cada vez que o bloco de código no loop foi executado.
*/

//# A Expressão 1:
/*
 - Normalmente, você usará a expressão 1 para inicializar a variável usada no loop (i = 0).
 - Nem sempre é assim. JavaScript não se importa. A expressão 1 é opcional.
 - Você pode iniciar muitos valores na expressão 1 (separados por vírgula):
*/
//* Exemplo:

//? const carros = ['bmw', 'volvo', 'saab', 'ford'];

//? for (let i = 0, length = carros.length, texto = '' ; i < length ; i++) {
     // Foi iniciado 3 valores na expressão 1: i, length e texto.
//?     texto += `${carros[i]} `;
//?     console.log(texto);
//? };

//# E você pode omitir a expressão 1 (como quando seus valores são definidos Antes do início do loop):
//* Exemplo:

//? const carros = ['bmw', 'volvo', 'saab', 'ford'];
//? let i = 0;
//? const length = carros.length;
//? let texto = '';

//? for ( ; i < length ; i++ ) {
 // A expressão 1 foi omitida
//?     texto += `${carros[i]} `
//?     console.log(texto)
//? };

//# A Expressão 2:
/*
 - Muitas vezes, a expressão 2 é usada para avaliar a condição da variável inicial.
 - Nem sempre é assim. JavaScript não se importa. A expressão 2 é também opcional.
 - Se a expressão 2 retornar true, o loop será reiniciado. Se retornar false, o loop vai acabar.
*/
//! Se você omitir a expressão 2, deverá colocar a palavra-chave "break" dentro do loop para quebrar o mesmo. Caso contrário, o loop nunca terminará. Isso irá travar o seu navegador.

//# A Expressão 3:
/*
 - Muitas vezes, a expressão 3 incrementa o valor da variável inicial.
 - Nem sempre é assim. JavaScript não se importa. A expressão 3 é opcional.
 - A expressão 3 pode fazer qualquer coisa, como incremento negativo (i--), incrementar de 2, 5, 10, 100... (i += 10), ou qualquer outra coisa.
 - A expressão 3 também pode ser omitida (como quando você incrementa seus valores dentro do loop).
*/
//* Exemplo:

//? const carros = ['bmw', 'ford', 'gol', 'hilux', 's10'];
//? let i = 0;
//? const length = carros.length;

//? for ( ; i < length ; ) {
// Foi omitido a expressão 1 e a expressão 3
//?     console.log(carros[i]);
//?     i++;
//? };

//# Exemplo com números negativos:

//? for ( let i = -3 ; i <= 3 ; i++) {
//?     console.log(`número ${i}`);
//? };

//# Exemplo incrementando de 2 em 2, de 5 em 5 ou de 10 em 10...

//? for ( let i = 0 ; i <= 30 ; i += 5) {
//?     console.log(`número ${i}`);
//? };

//# Exemplo usando decremento:

//? for ( let i = 10 ; i >= 0 ; i--) {
//?     console.log(`número ${i}`);
//? };

//# Exemplo descobrindo se um número é par ou ímpar:

//? let parImpar;

//? for ( let i = 0 ; i <= 10 ; i++) {
//?     parImpar = i % 2 === 0 ? 'par' : 'ímpar';
//?     console.log(i, parImpar);
//? };

//# Exemplo com Arrays:

const frutas = ['maça', 'melancia', 'uva', 'banana', 'pêra'];

for ( let i = 0 ; i < frutas.length ; i++) {
    console.log(frutas[i]);
};