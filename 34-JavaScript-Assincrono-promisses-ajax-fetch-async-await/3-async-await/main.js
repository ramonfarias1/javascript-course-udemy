// async = faz com que uma função retorne uma promessa

// await = faz uma função esperar por uma promessa

//# async
// A palavra-chave "async" antes de uma função faz com que a função retorne uma promessa
//? async function name(param1, param2, ...) { };

//# await
// A palavra-chave "await" só pode ser usada dentro de uma função async.

// A palavra-chave "await" faz com que a função pause a execução e aguarde uma promessa resolvida antes que ela continue.
//? const valor = await promise;

//* Exemplo:

function rand(max = 3, min = 0) {
    max *= 1000;
    min *= 1000;
    return Math.round(Math.random() * (max - min) + min);
};

function esperaMsg(msg, tempo) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if (typeof msg !== 'string') {
                reject('O tipo da msg não é string!');
                return;
            };

            resolve(msg);
        }, tempo);
    });
};

// esperaMsg('Promise 1', rand())
// .then( msg => {
//     console.log(msg);
//     return esperaMsg('Promise 2', rand());
// })
// .then( msg => {
//     console.log(msg);
//     return esperaMsg('Promise 3', rand());
// })
// .then( msg => {
//     console.log(msg);
//     return msg;
// })
// .then( msg => {
//     console.log('Terminou na ' + msg)
// });

async function mostraMsg() {
    try {
        const promise1 = await esperaMsg('Promise1', rand());
        console.log(promise1);
        const promise2 = await esperaMsg('Promise2', rand());
        console.log(promise2);
        const promise3 = await esperaMsg(123, rand());
        console.log(promise3);
        console.log('terminou na promise ' + promise3);
    } catch(erro) {
        console.log(erro);
    } finally {
        console.log('Encerrando...')
    };
};

mostraMsg();