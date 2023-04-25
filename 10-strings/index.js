//?####################################################################################
console.log('\n             USO DA BARRA INVERTIDA ( \\ ) EM STRINGS              \n');
//?####################################################################################

console.log("meu pai sempre dizia: \"uma frase.\""); // Você pode usar a barra invertida ( \ ) para fazer aparecer as aspas do texto mesmo usando as mesmas para a tipagem da string.

console.log('C:\\Users\\Fernando'); // Caso queira que apareça a barra invertida no texto, é só colocar outra barra invertida do lado, como no exemplo ao lado.

//?####################################################################################
console.log('\n             TRABALHANDO COM ÍNDICES                               \n');
//?####################################################################################

// No javaScript as Strings são INDEXADAS.

// Cada caractere de um texto tem um índice que começa em 0 1 2 3 4... até o máximo de caracteres que o texto tiver.
let umaString = 'um texto';
//               01234567

//*------------------------------------------------------------------------------
//* umaString[ índice ] Localiza o caractere no índice digitado entre colchetes[]
//*------------------------------------------------------------------------------

console.log(umaString[3]); // Localiza o caractere no índice 3
console.log(umaString[8]); // Caso selecione um índice que não tem no texto, o valor será UNDEFINED
console.log(umaString[-1]); // Undefined

//*-----------------------------------------------------------------------------
//* .charAt( índice ) Localiza o caractere no índice digitado entre parênteses()
//*-----------------------------------------------------------------------------

console.log(umaString.charAt(7)); // Outro método de localizar o caractere. Nesse caso foi localizado o caractere no índice 7

//*--------------------------------------------------------------------------------------------
//* .concat(`Texto a ser Concatenado`) Concatena o texto colocado entre parênteses() á variável
//*--------------------------------------------------------------------------------------------

console.log(umaString.concat(` teste concatenação`)); // Mesma coisa que o sinal de + faz, concatenação
console.log(umaString + ' teste concatenação');
console.log(`${umaString} teste concatenação`); // Template Strings

//*-----------------------------------------------------------------------------------------------------------
//* .indexOf('palavra ou caractere a ser procurado') // Procura em qual índice começa tal palavra ou caractere
//*-----------------------------------------------------------------------------------------------------------

console.log(umaString.indexOf('texto')); // Procura em qual índice começa tal palavra ou caractere. Nesse exemplo usamos a plavara "texto"
console.log(umaString.indexOf('Texto')); // Caso não encontre a palavra ou caractere, o índice retornado será ( -1 )
console.log