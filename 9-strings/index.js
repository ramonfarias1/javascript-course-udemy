//?#############################################################################################################
console.log('\n                         USO DA BARRA INVERTIDA ( \\ ) EM STRINGS                           \n');
//?#############################################################################################################

console.log("meu pai sempre dizia: \"uma frase.\""); // Você pode usar a barra invertida ( \ ) para fazer aparecer as aspas do texto mesmo usando as mesmas para a tipagem da string.

console.log('C:\\Users\\Fernando'); // Caso queira que apareça a barra invertida no texto, é só colocar outra barra invertida do lado, como no exemplo ao lado.

//?#############################################################################################################
console.log('\n                         ÍNDICES                                                            \n');
//?#############################################################################################################

// No javaScript as Strings são INDEXADAS.

// Cada caractere de um texto tem um índice que começa em 0 1 2 3 4... até o máximo de caracteres que o texto tiver.
let umaString = 'um texto';
//               01234567

//*-------------------------------------------------------------------------------------------------------------
console.log(`string[ índice ] \n`); //* Localiza o caractere no índice digitado entre colchetes[]
//*-------------------------------------------------------------------------------------------------------------

console.log(umaString[3]); // Localiza o caractere no índice 3

console.log(umaString[8]); // Caso selecione um índice que não tem no texto, o valor será UNDEFINED

console.log(umaString[-1]); // Esse method não suporta índices negativos, logo o valor retornado vai ser Undefined

//*-------------------------------------------------------------------------------------------------------------
console.log(`\n string.charAt( índice ) \n`); //* Localiza o caractere no índice digitado entre parênteses()
//*-------------------------------------------------------------------------------------------------------------

console.log(umaString.charAt(7)); // Outro método de localizar o caractere. Nesse caso foi localizado o caractere no índice 7

//*-------------------------------------------------------------------------------------------------------------
console.log(`\n string.concat('Texto a ser Concatenado') \n`); //* Concatena o texto colocado entre parênteses() á variável
//*-------------------------------------------------------------------------------------------------------------

console.log(umaString.concat(` teste concatenação`)); // Mesma coisa que o sinal de + faz, concatenação

console.log(umaString + ' teste concatenação');

console.log(`${umaString} teste concatenação`); // Template Strings

//*-------------------------------------------------------------------------------------------------------------
console.log(`\n string.indexOf('palavra ou caractere', índece) \n`); //* Procura uma palavra ou caractere, caso encontre, o valor retornado será o índice onde começa / está á palavra ou caractere, e, caso não encontre, o índice retornado será (-1)
//*-------------------------------------------------------------------------------------------------------------

console.log(umaString.indexOf('texto')); // Procura a palavra "texto"

console.log(umaString.indexOf('Texto')); // Não encontrou a palavra "texto", o índice retornado será ( -1 )

console.log(umaString.indexOf('xto', 3)); // Procura a palavra "xto", mas, procura apenas á partir do índice 3 adiante

console.log(umaString.indexOf('xto', 6)); // Não encontrou a palavra "xto" a partir do índice informado, o índice retornado será ( -1 )

//*-------------------------------------------------------------------------------------------------------------
console.log(`\n string.lastIndexOf('palavra ou caractere', índece) \n`); //* Procura ( DE TRÁS PRA FRENTE ) uma palavra ou caractere, caso encontre, o valor retornado será o índice onde começa / está á palavra ou caractere, e, caso não encontre, o índice retornado será (-1)
//*-------------------------------------------------------------------------------------------------------------

console.log(umaString.lastIndexOf('m')); // Procura o caractere "m" começando de trás pra frente

console.log(umaString.lastIndexOf('t', 4)); // Procura de trás pra frente o caractere "t" começando a partir do índice 4

console.log(umaString.lastIndexOf('o', 3)); // Procura de trás pra frente o caractere "o" começando a partir do índice 3

//?#############################################################################################################
console.log('\n                         MATCH E SEARCH                                                     \n');
//?#############################################################################################################

//*-------------------------------------------------------------------------------------------------------------
console.log(`\n string.match('palavra ou caractere' | /Expressão Regular/) \n`); //* Este método retorna um array com informações sobre a correspondência, incluindo o texto encontrado e seu índice na string, e também, retorna uma correspondência entre uma string com uma expressão regular. Se não houver correspondência, o método retorna null.
//*-------------------------------------------------------------------------------------------------------------

umaString = 'Um Texto';

console.log(umaString.match('xto')); // Retorna um array mostrando o índice de "xto", o texto onde ele está inserido, e seu grupo

console.log(umaString.match('texto')); // Retorna "Null" pois não tem "texto" na string

console.log(umaString.match(/[a-z]/g)); // Usando Expressão Regular para retornar todas as letras mínusculas da string

console.log(umaString.match(/[a-z]/)); // Retorna a primeira letra mínuscula da string, seu índice, o texto onde está inclusa, e seu grupo

//*-------------------------------------------------------------------------------------------------------------
console.log(`\n string.search('palavra ou caractere' | /Expressão Regular/) \n`); //* Mesma coisa do indexOf, MAS, permite a utilização de Expressões Regulares.
//*-------------------------------------------------------------------------------------------------------------

let texto = umaString.search('Texto'); // Retorna o índece de "Texto"
console.log(texto);

texto = umaString.search(/Texto/); // Retorna o índice de "Texto", MAS, usando Expressões Regulares
console.log(texto);

//?#############################################################################################################
console.log('\n                         STRING METHODS                                                     \n');
//?#############################################################################################################

//*-------------------------------------------------------------------------------------------------------------
console.log(`\n string.length \n`); //* Retorna quantos caracteres tem uma string
//*-------------------------------------------------------------------------------------------------------------

umaString = 'o rato roe';
//           12345678910

let caracteresString = umaString.length; // "o rato roe" tem 10 caracteres
console.log(caracteresString);

//*-------------------------------------------------------------------------------------------------------------
console.log(`\n string.replace('palavra ou caractere', 'palavra ou caractere' | /Expressão Regular/) \n`); //* Substitui uma palavra ou caractere por outra palavra ou caractere
//*-------------------------------------------------------------------------------------------------------------

texto = umaString.replace('Um', 'Outro'); // Substitui "Um" por "Outro"
console.log(texto);

texto = umaString.replace(/Um/, 'Outro'); // Usando RegEx
console.log(texto);

umaString = 'o rato roeu a roupa do rei de roma';

texto = umaString.replace(/r/g, '#'); // Substitui todos os "r" por "#"
console.log(texto);

//*-------------------------------------------------------------------------------------------------------------
console.log(`\n string.slice(indexStart, indexEnd(opcional)) \n`); //* Extrai uma seção de uma string e retorna como uma nova string, sem modificar a string original.
//*-------------------------------------------------------------------------------------------------------------

let stringFatiada = umaString.slice(7); // Extrai "roe" da string
console.log(stringFatiada);

stringFatiada = umaString.slice(2, 7); // Extrai "rato" da string
console.log(stringFatiada);

stringFatiada = umaString.slice(-3); // Quando o índice é negativo, ele é subtraído com o tamanho da string ( umaString.length - 3 = 7). Como o índice deu 7 então também vai Extrair "roe" da string
console.log(stringFatiada);

stringFatiada = umaString.slice(-8, -4); // Extrai "rato" da String usando índices negativos
console.log(stringFatiada);

// Existe um method chamado .substring que faz a mesma coisa que o slice com índices negativos, a diferença é que para funfar tem que escrever ( string.length - índice ) dentro do method. Então nesse caso é melhor usar slice mesmo.
console.log(umaString.substring(umaString.length - 8, umaString.length - 4)); // Extrai "rato" da String

//*-------------------------------------------------------------------------------------------------------------
console.log(`\n string.split('separador' | /RegEx/, limite(opcional)) \n`); //* Divide uma String em uma lista ordenada de substrings; Coloca essas substrings em um array e retorna o mesmo; Não altera a string original; Se (" ") é usado como separador, a string é dividida entre palavras.
//*-------------------------------------------------------------------------------------------------------------

umaString = 'O Rato Roeu a Roupa do Rei de Roma';

stringDividida = umaString.split(' '); // Divide a string entre as palavras
console.log(stringDividida);

stringDividida = umaString.split('R'); // Divide a string entre os "r"
console.log(stringDividida);

stringDividida = umaString.split(' ', 2); // Limita a divisão em 2
console.log(stringDividida);

stringDividida = umaString.split(/R/, 3); // Usando RegEx
console.log(stringDividida);

//*-------------------------------------------------------------------------------------------------------------
console.log(`\n string.toUpperCase() | string.toLowerCase() \n`); //* Coloca toda a string em MAÍUSCULAS | mínusculas.
//*-------------------------------------------------------------------------------------------------------------

console.log(umaString.toUpperCase()); // MAÍUSCULAS

console.log(umaString.toLowerCase()); // mínusculas

//# Verificar se uma string termina com uma letra que queremos string.endsWith('a')

const nome = 'Rosana';

console.log(nome.endsWith('a'));