/* Regras das Constantes: 
 * Não pode criar constantes com palavras reservadas
 * Constantes precisam ter nome significativos
 * O nome não pode começar com número
 * Não pode conter espaço ou traço
 * Utilizamos camelCase (inicia a primeira palavra com minúscula e as outras com maiúsculas)
 * caseSensitive (mínusculas e maiúsculas fazem diferença)
 * Não podemos modificar o valor de uma constante
 * NÃO UTILIZE VAR, UTILIZE CONST
 * Sempre use const, mas se você ver que o valor da variável precisa ser modificado simplesmente troque para let
*/

const nome = 'ramon' // já inicializamos a constante na declaração

// nome = 'gugu' // não pode modificar o valor de uma constante

// DICA: É sempre bom ir evoluindo os valores usando const para que os primeiros valores não sejam substituidos, como seria usando a variável let, mas, se os primeiros valores precisarem ser substituidos, ai usa let.

// Exemplo:

const primeiroNumero = 6

const segundoNumero  = 8

const resultado = primeiroNumero + segundoNumero

console.log(resultado)

const resultadoDobro = resultado * 2

console.log(resultadoDobro)

const resultadoTriplo = resultado * 3

console.log(resultadoTriplo)

// Exemplo modificando os valores com let:

let numeroUm = 4

let numeroDois = 7

let resultadoComLet = numeroUm + numeroDois

resultadoComLet = resultadoComLet + 10

console.log(resultadoComLet)

numeroUm  = 2

numeroDois = 3

resultadoComLet = numeroUm + numeroDois

console.log(resultadoComLet)