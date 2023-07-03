//# Hoisting
// O Hoisting é o comportamento padrão do JavaScript de mover todas as declarações para o parte superior do escopo atual (na parte superior do script atual ou da função atual).

// Em outras palavaras uma variável ou function pode ser usada antes de ser declarada.

/* Mas com variáveis só funciona apenas com aquelas declaradas com "var". O Hoisting também ocorre com "let" e "const" mas as mesmas precisão ser inicializadas e depois usadas, e a inicialização não tem hoisting. Por isso se você tentar usar uma variável "let" ou "const" antes de suas declarações, o JavaScript estará ciente daquelas variáveis, mas mesmo assim ocorrerá um "ReferenceError".
*/

/* Com functions, só funcionará com aquelas declaradas de maneira "clássica". Desse jeito:
function falaOi() {
    console.log('Oi!');
};
falaOi();
*/

//* Exemplo com (var):
//? nome = 'bojji'; // A variável recebeu um valor antes de ser declarada
//? console.log(nome); // E foi usada antes de ser declarada
//? var nome;

//? console.log(nome2); // O hoisting move apenas a declaração, ele não move o valor inicializado também.
//? var nome2 = 'Bosses';

//* Exemplo com (let/const):
//? nome = 'bojji'; //  Ocorrerá um "ReferenceError"
//? console.log(nome);
//? let nome;

//*Exemplo com (functions):

falaOi(); // É possível chamar a função antes de ela ser declarada graças ao Hoisting.
function falaOi() {
    console.log('Oi!');
};