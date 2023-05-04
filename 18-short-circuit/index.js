/*
 #                                  Avaliação de Curto-Circuito
*/

// No JavaScript os operadores lógicos são avaliados da esquerda para a direita, e eles curto-circuitam.

// Isso significa que nos operadores lógicos quando o JavaScript análisa as expressões da esquerda para a direita e acha uma expressão que é avaliada como false ou true dependendo do operador, será retornado o valor em si dessa expressão e todas as expressões que estão depois dela não serão análisadas.

// Isso se difere entre os Operadores Lógicos.

// No JavaScript tudo é avaliado como true ou false

/* Os valores avaliados em false chamamos de ( FALSY ), que são eles:

false    ( literal )
0        ( Número )
'' "" `` ( String Vazia )
null / Undefined
NaN

*/

//# && (And)

// No operador ( && ) a partir do momento que achar uma expressão que avalie em false, vai ser retornado o valor desta expressão em si.
// Com o valor achado, todas as expressões depois dele não seram analisadas.
// Se todas as expressões forem true, o valor retornado será o da última expressão.

console.log('ramon' && false && 'nomar'); // o valor retornado será 0 pois 0 é avaliado como false, e toda expressão depois dele não será análisada, no caso, a expressão 'nomar' não será analisada.

console.log('ramon' && 0 && 'nomar');

console.log('ramon' && '' && 'nomar');

console.log('ramon' && null && 'nomar');

console.log('ramon' && undefined && 'nomar');

console.log('ramon' && NaN && 'nomar');

console.log('ramon' && true && 'nomar'); // o valor retornado será 'nomar' pois todas as expressões são true fazendo assim com que retorne o valor da última expressão.

function falaOi() {
    return 'oi';
};
let vaiExecutar = false;
console.log(vaiExecutar && falaOi()); // Se o valor de vaiExecutar for true, vai falar oi, se for um valor false, não vai falar oi.

//# || (Or)

// No operador ( || ) a partir do momento que achar uma expressão que avalie em true, vai ser retornado o valor desta expressão em si.
// Com o valor achado, todas as expressões depois dele não seram analisadas.
// Se todas as expressões forem false, o valor retornado será o da última expressão.

console.log(false || 0 || '' || undefined || 'ramon' || true); // Vai retornar 'ramon' pois é o primeiro valor true.

let userColor;
const defaultColor = userColor || 'black'; // Exemplo de aplicação de short-circuit
console.log(defaultColor);

const a = 0;
const b = '';
const c = 'false'; //  Vai retonar 'false' pois está dentro de aspas, logo é uma string, e string é true
const d = false;
const e = NaN;

console.log(a || b || c || d || e);