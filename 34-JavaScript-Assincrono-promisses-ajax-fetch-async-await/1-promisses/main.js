//# JavaScript Assíncrono
// As functions executas em paralelo com outras functions são chamadas de "assíncronas"

// Um bom exemplo é o setTimeout()

// Com a programação assíncrona, os programas JavaScript podem iniciar tarefas de longa duração, e continuar executando outras tarefas em paralelo. Mas, programas assíncronos são difíceis de escrever e difíceis de depurar. Devido a isso, a maioria dos métodos JavaScript assíncronos modernos não usam "callbacks". Em vez disso, em JavaScript, a programação assíncrona é resolvida usando "promises".

//# promises
/*
Em JavaScript, uma promise é uma boa maneira de lidar com operações assíncronas. Ele é usado para descobrir se a operação assíncrona foi concluída com êxito ou não.

Uma promise pode ter um dos três estados.

- Pending
- Fulfilled
- Rejected

Uma promise começa em um estado pending. Isso significa que o processo não está completo. Se a operação for bem-sucedida, o processo terminará em um estado fulfilled. E, se ocorrer um erro, o processo termina em um estado rejected.

Por exemplo, quando você solicita dados do servidor usando uma promise, ele estará em um estado pending. Quando os dados chegarem com sucesso, eles estarão em um estado fulfilled. Se ocorrer um erro, ele estará em um estado rejected.
*/

//# Criando uma promise
// Para criar um object promise usamos o constructor "promise()".

const promise = new Promise( function(resolve, reject) {} );

// O constructor "Promise()" assume uma function como argumento. A function também aceita dois parâmetros "resolve" e "reject".

// Se a promise retornar com êxito, o parâmetro "resolve" será chamado. E, se ocorrer um erro, o parâmetro "reject" será chamado.

//* Exemplo01:
// Vamos supor que o programa abaixo seja um programa assíncrono. Em seguida, o programa pode ser manipulado usando uma promise.

const isValid = true;

const isValidValue = new Promise( (resolve, reject) => {
    if (isValid) resolve('É válido!');
    if (!isValid) reject('Não é valido!');
});

console.log(isValidValue);

// No programa acima, é criado um objeto promise que assume duas funções: "resolve" e "reject". "resolve" é usado se o processo for bem-sucedido e "reject" é usado quando ocorre um erro na promise.

// A promise é resolvida se o valor de "isValid" for "true".

//# Encadeamento de Promises
// As promises são úteis quando você precisa lidar com mais de uma tarefa assíncrona, uma após a outra. Para isso, usamos o encadeamento de promises.

// Você pode executar uma operação depois que uma promise é resolvida usando métodos "then()", "catch()" e "finally()".

//# Método then()
// O método "then()" é usado como callback quando a promise é cumprida ou resolvida com êxito.

// A sintaxe do método "then()" é:
//? promiseObject.then(onFulfilled, onRejected);

//# Método catch()
// O método é catch() usado com o callback() quando a promessa é rejeitada ou se ocorrer um erro.

//# Método finally()
// Você também pode usar o método finally() com promessas. O método é executado quando a promessa é resolvida com êxito ou rejeitada.

function randomTime(max, min) {
    max *= 1000;
    min *= 1000;
    return Math.round(Math.random() * (max - min) + min);
};

function waitASecond(msg, time) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(new Error('BAD VALUE'));

        setTimeout(() => {
            resolve(msg);
        }, time);
    });
};

waitASecond('Connecting to the data base...', randomTime(1, 3))
.then(answer => {
    console.log(answer);
    return waitASecond('fetching the data...', randomTime(1, 3));
})
.then(answer => {
    console.log(answer);
    return waitASecond(666, randomTime(1, 3));
})
.then(answer => {
    console.log(answer);
})
.then(() => {
    console.log('Displaying the data on the screen...');
})
.catch((error) => {
    console.log(error);
})
.finally( () => {
    console.log('Parando programa...');
});

console.log('I will be executed before any promise');

// No programa acima, o método then() é usado para encadear as funções para a promessa. O método then() é chamado quando a promessa é resolvida com êxito. Você pode encadear vários métodos com a promessa.then().

// No programa acima, a promessa é rejeitada. E o método catch() é usado com a promessa de lidar com o erro.

//# Promises VS Callback Functions
/*
As promessas são semelhantes às funções de retorno de chamada no sentido de que ambas podem ser usadas para lidar com tarefas assíncronas.

As funções de retorno de chamada JavaScript também podem ser usadas para executar tarefas síncronas.

Suas diferenças podem ser resumidas nos seguintes pontos:

 - Promessa JavaScript:
A sintaxe é fácil de ler e fácil de ler.
O tratamento de erros é mais fácil de gerenciar.

 - Retorno de chamada JavaScript:
A sintaxe é difícil de entender.
O tratamento de erros pode ser difícil de gerenciar.
*/