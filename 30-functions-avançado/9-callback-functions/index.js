// CallBack é uma função passada como um argumento para outra função.

// Essa técnica permite que uma função chame outra função.

// Uma função de CallBack pode ser executada após a conclusão de outra função.

//! Nota: Ao passar uma função como argumento, lembre-se de não usar parênteses.

//* Exemplo:

function rand(max = 3, min = 1) {
    max *= 1000;
    min *= 1000;
    return Math.round(Math.random() * (max - min) + min);
};

function f1(f2call) {
    setTimeout( () => {
        console.log('f1');
        if (f2call) f2call();
    }, rand() );
};

function f2(f3call) {
    setTimeout( () => {
        console.log('f2');
        if (f3call) f3call();
    }, rand() );
};

function f3(finish) {
    setTimeout( () => {
        console.log('f3');
        if (finish) finish();
    }, rand() );
};

f1(f2call);

function f2call() {
    f2(f3call);
};

function f3call() {
    f3(finish);
};

function finish() {
    console.log('terminou!');
};