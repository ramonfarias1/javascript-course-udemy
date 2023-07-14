//# Arrow Functions
// As arrow functions nos permitem escrever uma sintaxe de função mais curta:

const minhaFunction = () => {
    return 'minha function';
};
console.log(minhaFunction());

// Fica mais curto! Se a função tiver apenas uma instrução e a instrução retorna um valor, você pode remover os colchetes e a palavra-chave: return.

const minhaFunction2 = () => 'minha function2';
console.log(minhaFunction2());

//* Nota: Isso só funciona se a função tiver apenas um declaração.

// Se você tiver apenas um parâmetro, também poderá ignorar os parênteses:

const string = 'function3';

const minhaFunction3 = stringParam => 'minha ' + stringParam;
console.log(minhaFunction3(string));