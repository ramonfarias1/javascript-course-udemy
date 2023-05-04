/*
 * Logical Operators
 * ( && ) -> And -> E // Todas as expressões precisam ser true para retornar true
 * ( || ) -> Or  -> Ou // Apenas uma das expressões precisa ser true para retornar true
 * ( ! )  -> Not -> Não // Inverte o valor, true vira false e false vira true
*/

//* && (And)

let expressaoAnd = true && true // Todas as expressões precisam ser true para retornar true
console.log(expressaoAnd)
expressaoAnd = true && true && true && true && true // Pode ter quantas expressões necessitar
console.log(expressaoAnd)
expressaoAnd = true && true && true && false && true // Se apenas uma ou mais expressões for false o valor retornado será false
console.log(expressaoAnd)

//* || (Or)

let expressaoOr = true || false // Apenas uma das expressões precisa ser true para retornar true
console.log(expressaoOr)
expressaoOr = false || false || false || false || true
console.log(expressaoOr)
expressaoOr = false || false || false || false // Para retornar false, todas as expressões precisam ser false
console.log(expressaoOr)

//* ! (Not)

console.log(!true) // Inverte o valor

console.log(!false)

//* Exemplo:

const user = 'hehebuoy'
const password = 12345
//                  expressao            expressao
const acess = user === 'hehebuoy' && password === 12345
console.log(acess)