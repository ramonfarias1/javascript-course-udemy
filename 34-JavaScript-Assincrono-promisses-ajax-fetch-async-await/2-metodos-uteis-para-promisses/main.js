function retornaPromise(msg, tempo) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {

            if (typeof msg !== 'string') {
                reject('A mensagem não é do tipo String!');
                return;
            };

            resolve(msg);
        }, tempo);
    });
};

const promises = [
    // 'Primeiro valor',
    retornaPromise('Promise 1', 1500),
    retornaPromise('Promise 2', 500),
    retornaPromise('Promise 3', 1000),
    retornaPromise(123, 2000),
    // 'Último valor',
];

//# Promise.all(iteravel)
// O método Promise.all(iterable) retorna uma única Promise que resolve quando todas as promises no argumento iterável forem resolvidas ou quando o iterável passado como argumento não contém promises. É rejeitado com o motivo da primeira promise que foi rejeitada.

Promise.all(promises)
.then( (valor) => {
    console.log(valor);
})
.catch( (erro) => {
    console.log(erro);
});

//# Promise.race(iterável)
// O método Promise.race(iterable) retorna uma promise que resolve ou rejeita assim que uma das promises no iterável resolver ou rejeitar, com o valor ou razão daquela promise.

Promise.race(promises)
.then( (valor) => {
    console.log(valor);
})
.catch( (erro) => {
    console.log(erro);
});

//# Promise.resolve(valor) | Promise.reject(motivo)
/*
- Promise.resolve():
O método Promise.resolve(value) retorna um objeto Promise que é resolvido com o valor passado. Se o valor for thenable (ex: tiver um método then), a promise retornada irá "seguir" esse thenable, adotando seu estado final; se o valor for uma promise, o objeto será o resultado da chamada Promise.resolve; do contrário a promise será realizada com o valor.

- Promise.reject():
O método Promise.reject(motivo) retorna um objeto Promise que é rejeitada com um dado motivo.
*/

function baixaPagina() {
    const emCache = true;

    if (emCache) {
        return Promise.reject('A página já está em cache!'); // Promise.resolve()
    } else {
        return retornaPromise('Baixando página...', 3000);
    };
};

baixaPagina()
.then( valor => console.log(valor))
.catch( erro => console.log('Erro: ' + erro));