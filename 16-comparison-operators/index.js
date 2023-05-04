/*
 * Comparison Operators:
 * ( > )   maior que
 * ( >= )  maior que ou igual a
 * ( < )   menor que
 * ( <= )  menor que ou igual a
 * ( == )  igualdade             // compara apenas o valor NÃO RECOMENDADO
 * ( === ) igualdade estrita     // compara o valor e o tipo primitivo
 * ( != )  diferença             // NÃO RECOMENDADO
 * ( !== ) diferença estrita
*/

console.log(10 > 5) // 10 é maior que 5?
console.log(5 > 10) // 5 é maior que 10?

console.log(10 >= 10) // 10 é maior ou igual a 10?
console.log(10 >= 11) // 10 é maior ou igual a 11?

console.log(10 < 11) // 10 é menor que 11?
console.log(11 < 10) // 11 é menor que 10?

console.log(11 <= 11) // 11 é menor ou igual a 11?
console.log(12 <= 11) // 12 é menor ou igual a 11?

console.log(15 == '15') // 15 Number é igual a 15 String?
console.log(15 == 15) // 15 Number é igual a 15 Number?
console.log(15 == '16') // 15 Number é igual a 16 String?
console.log(15 == 16) // 15 Number é igual a 16 Number?

console.log(15 === "15") // 15 Number é estritamente igual a 15 String?
console.log(15 === 15) // 15 Number é estritamente igual a 15 Number?
console.log(15 === '16') // 15 Number é estritamente igual a 16 Number?
console.log(15 === 16) // 15 Number é estritamente igual a 16 Number?

console.log(20 != '21') // 20 Number é diferente de 21 String?
console.log(20 != 21) // 20 Number é diferente de 21 Number?
console.log(20 != '20') // 20 Number é diferente de 20 String?
console.log(20 != 20) // 20 Number é diferente de 20 String?

console.log(20 !== '21') // 20 Number é estritamente diferente de 20 String?
console.log(20 !== 21) // 20 Number é estritamente diferente de 20 String?
console.log(20 !== '20') // 20 Number é estritamente diferente de 20 String?
console.log(20 !== 20) // 20 Number é  estritamente diferente de 20 String?
