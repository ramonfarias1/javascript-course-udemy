// divisivel por 3 = fizz
// por 5 = buzz
// por 3 e 5 = fizzbuzz
// não divisivel por 3 e 5 = retorna o proprio número
// checar se o número é um número
// usar com valores de 0 a 100

const calcular = (numero) => {
    if (typeof(numero) !== 'number') return 'Não é um número';
    if (numero % 3 === 0 && numero % 5 === 0) return 'fizzbuzz';
    // Se tiver um if com 2 ou mais condições, e essas condições também estiverem em outros ifs que estão no mesmo bloco que ele, então o if que tem mais condições deve vir primeiro.
    if (numero % 3 === 0) return 'fizz';
    if (numero % 5 === 0) return 'buzz';
    return numero;
};

console.log('a', calcular('a'))
for ( let i = 0 ; i <= 100 ; i++) {
    console.log(i, calcular(i));
};