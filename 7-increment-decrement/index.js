/*
 * increment ( ++ )
 * decrement ( -- )
*/

// Obs: Essa forma de Incrementação e Decrementação só acontece de 1 em 1.

console.log()
console.log(`INCREMENTANDO VALORES ( ++ ):`)

let contador = 1

contador++ // ( ++ ) realiza a incrementação, ou seja, soma um valor a mais na variável contador.
contador++
contador++
console.log(contador)

/*
const contador2 = 1 // não pode usar const em incrementação pois o valor de const não pode ser modificado
contador2++
contador2++
console.log(contador2)
*/

// O operador pode ser pós-fixado ( contador++ ) ou pré-fixado ( ++contador ):

// O pós-fixado primeiro mostra o valor e depois incrementa

// O pré-fixado primeiro incrementa o valor e logo depois mostra ele

console.log()
console.log(`Pós-fixado Incremento:`)

let counter = 1

console.log(counter++) // ele primeiro mostra o valor e logo depois incrementa, mas não mostra a incrementação.
console.log(counter) // aqui eu pedi pra que mostrasse o valor logo depois da incrementação feita acima.

console.log()
console.log(`Pré-fixado Incremento:`)

let counter2 = 1

console.log(++counter2) // aqui ele já mostrou o valor incrementado, pois a incrementação veio antes de mostrar o valor. então eu não precisei escrever outra linha de console.log pra mostrar o valor incrementado.

console.log()
console.log(`DECREMENTANDO VALORES ( -- )`)
// Para decrementar um valor é a mesma coisa do incremento, o que muda é o operador ( + ) que agora é ( - ).

let contadorDecremento = 10

contadorDecremento-- // ( -- ) realiza a decrementação, ou seja, diminui um valor da variável contadorDecremento.
contadorDecremento--
contadorDecremento--
console.log(contadorDecremento)

console.log()
console.log(`Pós-fixado Decremento:`)

let counterDecrement = 10

console.log(counterDecrement--) // ele primeiro mostra o valor e logo depois decrementa, mas não mostra a decrementação.
console.log(counterDecrement)

console.log()
console.log(`Pré-fixado Decremento:`)

let counterDecrement2 = 10

console.log(--counterDecrement2) // aqui ele já mostrou o valor decrementado, pois a decrementação veio antes de mostrar o valor. então eu não precisei escrever outra linha de console.log pra mostrar o valor decrementado.




// contador = contador + passo

// Obs: Essa forma permite definir um passo para por exemplo incrementar de 2 em 2, de 3 em 3 e assim vai... a mesma coisa para a decrementação.

console.log()
console.log(`contador = contador + passo:`)

let contador2 = 2
const passo2 = 2

console.log(contador2)
contador2 = contador2 + passo2
console.log(contador2)
contador2 = contador2 + passo2
console.log(contador2)
contador2 = contador2 + passo2
console.log(contador2)
contador2 = contador2 + passo2
console.log(contador2)

// contador = contador - passo

console.log()
console.log(`contador = contador - passo`)

console.log(contador2)
contador2 = contador2 - passo2
console.log(contador2)
contador2 = contador2 - passo2
console.log(contador2)
contador2 = contador2 - passo2
console.log(contador2)
contador2 = contador2 - passo2
console.log(contador2)

// Também podemos fazer com outros Operadores:

let contador3 = 2
const passo3 = 2

console.log()
console.log(`Também podemos fazer com outros Operadores:`)

console.log(contador3)
contador3 = contador3 * passo3 // pode ser qualquer um dos outros operadores
console.log(contador3)
contador3 = contador3 * passo3
console.log(contador3)

// Atalho para essa Incrementação e Decrementação:

let contador4 = 2
const passo4 = 2

console.log()
console.log(`contador += passo`)

console.log(contador4)
contador4 += passo4 // é a mesma coisa que: contador4 = contador4 + passo
console.log(contador4)
contador4 += passo4
console.log(contador4)
contador4 += passo4
console.log(contador4)
contador4 += passo4
console.log(contador4)

console.log()
console.log(`contador -= passo`)

console.log(contador4)
contador4 -= passo4
console.log(contador4)
contador4 -= passo4
console.log(contador4)
contador4 -= passo4
console.log(contador4)
contador4 -= passo4
console.log(contador4)