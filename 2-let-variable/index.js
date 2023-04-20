/* Regras das variáveis: 
 * Não pode criar variável com palavras reservadas
 * Variáveis precisam ter nome significativos
 * O nome não pode começar com número
 * Não pode conter espaço ou traço
 * Utilizamos camelCase (inicia a primeira palavra com minúscula e as outras com maiúsculas)
 * caseSensitive (mínusculas e maiúsculas fazem diferença)
 * Não podemos redeclarar variáveis com let
 * NÃO UTILIZE VAR, UTILIZE LET
*/

//colocando o valor da variável já na declaração:

let nome = 'Ramon'

console.log(`Meu nome é ${nome}`)

console.log(`O ${nome} tem 6 filhos`)

// deixando a variável vazia e inicializando ela colocando um valor depois:

let nome2

nome2 = 'Alberto'

console.log(`Meu nome é ${nome2}`)

console.log(`O ${nome2} tem 6 filhos`)

nome2 = 'Jeff'

console.log(`Meu nome é ${nome2}`)

console.log(`O ${nome2} tem 6 filhos`)

// let nome2 = 'João' // não pode redeclarar a variável