                                            //* INFINITY


// Se dividirmos um número por 0, no JavaScript o valor retornado é Infinity.

// Ele é colocado como True

console.log(100 / 0, !!(100 / 0));


                                            //* CONVERSÃO


//# Number.toString(radix: number | undefined): string
// Converte Number para String
// @param radix - Faz a representação do número em uma outra base numérica. Apenas para números.

let num1 = 1;
let num2 = 2.2;

let resultado = num1.toString() + num2; // Converte sem alterar o valor original da variável
console.log(resultado); // Foi realizada a Concatenação pois num1 foi convertido para String
console.log(num1, typeof num1);

num1 = 1500
console.log(num1.toString(2)); // Representação binária do número de num1

num1 = 1
num1 = num1.toString(); // Converte e Altera o valor original da variável
console.log(num1 + num2);
console.log(num1, typeof num1);

//# String(value: any): string
// Converte um valor para String

num1 = 1
resultado = String(num1) + num2; // Converte sem alterar o valor original da variável
console.log(resultado); // Foi realizada a Concatenação pois num1 foi convertido para String
console.log(num1, typeof num1);

//# Number.toFixed(fractionDigits: number | undefined): string
// Converte Number para String
// Arredonda o número decimal
// @param fractionDigits - Específica a quantidade de casas decimais. o Padrão é 0.

num1 = 3.14159265359;
resultado = num1.toFixed(); // Converteu para String e arrendondou o número
console.log(resultado);

resultado = num1.toFixed(2); // Foi específicado a quantidade de casas decimais
console.log(resultado);


                                                //* VERIFICAÇÃO


// Imagina que você ta recendo um número de uma conta ou de uma base de dados e quer verificar algumas coisas

//# Number.isInteger(number): boolean
// Retorna True se um valor for um inteiro do tipo Number
// Caso contrário, ele retorna False

num1 = 10;
console.log(Number.isInteger(num1));

console.log(Number.isInteger(5/10));

//# Number.isNaN(number): boolean
// Retorna True se o valor for NaN e o tipo for Number
// Caso contrário, ele retorna False

resultado = 10 * 'olá';
console.log(resultado, Number.isNaN(resultado));

resultado = 10 * '5'; // Não faça conta com strings, não é uma boa prática de programação
console.log(resultado, Number.isNaN(resultado));

                                            //* IEEE 754-2008

num1 = 0.7;
num2 = 0.1;

num1 += num2; // num1 = num1 + num2 // 0.8
num1 += num2; // 0.9
num1 += num2; // 1

num1 = num1.toFixed();
num1 = Number(num1);

console.log(num1, Number.isInteger(num1));

num1 += num2; // 1.1
num1 += num2; // 1.2

console.log(num1, Number.isInteger(num1));