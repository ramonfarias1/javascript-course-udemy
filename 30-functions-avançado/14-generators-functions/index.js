//# Functions Geradoras
/* As funções geradoras (generator functions) são funções onde a execução é adiada até o momento que precisamos de seu retorno. Os contextos ficam salvos a cada reentrada.

Funções geradoras são pilares para uma programação assíncrona que mitigam os problemas com callbacks. Ao invocar a uma função geradora sua implementação não é execudata imediatamente. Ao invés disso é retornado um iterator. Somente quando precisamos do do retorno de seu valor next() a implementação é executada até a parada com o termo yield que especifíca o valor a ser retornado pela execução.

O retorno não é o próprio valor em sim mas um objeto contendo dois atributos. value e done que indica se a função já terminou toda sua execução.
*/

//* Exemplo01:

function* geradora01() { //! Não esqueça do asterisco* = "function*"
    // código...
    yield 'valor1';
    // código...
    yield 'valor2';
    // código...
    yield 'valor3';
    // código...
};

const g01 = geradora01();

//? console.log(g01.next().value);
//? console.log(g01.next().value);
//? console.log(g01.next().value);
//? console.log(g01.next());

// É possível iterar sobre a function geradora:

for (let valor of g01) {
    console.log(valor);
};

//* Exemplo02:
// Gerando valores infinitos

function* geradora02() {
    let i = 0;
    while (true) {
        yield i;
        i++;
    };
};

const g2 = geradora02();

console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

//* Exemplo03:
// É possível executar uma function geradora dentro de outra

function* geradora03() {
    yield 0;
    yield 1;
    yield 2;
};

function* geradora04() {
    yield* geradora03(); // Para executar a outra function geradora, tem que colocar a palavra-chave "yield*" com asterisco*.
    yield 3;
    yield 4;
    yield 5;
};

const g4 = geradora04();

console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);

//* Exemplo04:
// Gerando functions de dentro da function geradora

function* geradora5() {
    // código...
    yield function() {
        console.log('Vim do yield 01');
    };
    // código...
    yield function() {
        console.log('Vim do yield 02');
    };
    // código...
};

const g5 = geradora5();

const func01 = g5.next().value;
const func02 = g5.next().value;

console.log(func01);
console.log(func02);

func01();
func02();

//* Exemplo05:
// Return na function geradora irá terminar a mesma

function* geradora6() {
    // código...
    yield function() {
        console.log('Vim do yield 01');
    };
    // código...
    return function() { //  Caso usemos return ao invés de yield, a function geradora será terminada e não executará nenhum código depois do return.
        console.log('Vim do yield 02');
    };
    // código...
    yield function() {
        console.log('Vim do yield 03');
    };
    // código...
};

const g6 = geradora6();

const func001 = g6.next().value;
const func002 = g6.next().value;
const func003 = g6.next().value;

console.log(func001);
console.log(func002);
console.log(func003);

func001();
func002();
func003(); //  Ocorrerá o erro "func003 is not a function";