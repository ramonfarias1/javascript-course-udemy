//#                                     Conditional Structures

// Serve para desviar o fluxo de execução da aplicação quando necessário

/*
 * - O if pode ser usado sozinho
 * - Sempre que utilizo a condição else, preciso de um if antes
 * - Pode ter vários else if na estrutura
 * - Só pode ter apenas um else na estrutura
 * - Podemos utilizar condições sem else if se necessário, utilizando apenas if e else
*/

// Exemplo01:

const hours = 00;

if (hours >= 6 && hours < 12) {
    console.log('Bom Dia!');
} else if (hours >= 12 && hours < 18) {
    console.log('boa tarde!');
} else if (hours >= 18 || hours < 6) {
    console.log('Boa Noite!');
} else {
    console.log('Olá');
};

// Exemplo02:

const num = 10

// se (num >=0 && num <=5) for true, faça isso { código }
// se não, faça isso { código }

if (num >=0 && num <=5) {
    console.log('o número está entre 0 e 5');
} else {
    console.log('o número não está entre 0 e 5');
};

console.log('o número não está entre 0 e 5') // Essa linha de código não está dentro da estrutura condicional, portanto ela será executada no fluxo normal do código.