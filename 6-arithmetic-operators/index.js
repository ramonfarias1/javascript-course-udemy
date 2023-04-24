/* Arithmetic Operators:

( ** ) =  Potênciação

( * ) = multiplicação

( / ) = divisão

( % ) = resto da divisão

( + ) = Faz a adição / concatenação

( - ) = subtração

*/

// Exemplo de Concatenação:

const num1 = '3'

const num2 = 6

const resultado = num1 + num2 // adição / concatenação

console.log(resultado)

// Caso utilize qualquer outro operador que não seja o de adição / concatenação para obter um resultado de duas variáveis onde uma é String e a outra é Number, o JavaScript retornara o valor "NaN" (Not a Number):

// Exemplo de NaN:

const n1 = 3
const n2 = 'palavra'
const result= n1 * n2

console.log(result) // = NaN (Not a Number)

/* Ordem dos Operadores:

1 - () Parênteses

2 - ( ** ) = Potenciação

3 - ( * ) = multiplicação | ( / ) = divisão | ( % ) resto da divisão | Obs: da esquerda para a direita, ou seja se a divisão vir primeiro que a multiplicação, ela ira ser resolvida primeiro.

4 - ( + ) = adição | ( - ) = subtração | Obs: da esquerda para a direita

*/

// Exemplo de Ordem:

const valor1 = 4

const valor2 = 5

const valor3 = 5

console.log(valor1 + valor2 * valor3) // a multiplicação irá ser resolvida primeiro.

// exemplo 2:

const number1 = 8

const number2 = 2

const number3 = 2

console.log(number1 / number2 * number3) // a divisão irá ser revolvida primeiro pois elá está na frente.

// exemplo 3:

const numero1 = 12

const numero2 = 3

const numero3 = 2

console.log (numero1 / (numero2 * numero3)) // apesar da divisão está na frente, o parêntese tem uma ordem de prioridade maior, então ele irá ser resolvido primeiro.