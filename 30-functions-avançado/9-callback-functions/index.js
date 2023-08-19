// CallBack é uma função passada como um argumento para outra função.

// Essa técnica permite que uma função chame outra função.

// Uma função de CallBack pode ser executada após a conclusão de outra função.

//! Nota: Ao passar uma função como argumento, lembre-se de não usar parênteses.

//* Exemplo:

function f1(callback) {
    console.log('f1');
    if (callback) callback();
};

function f2(callback) {
    console.log('f2');
    if (callback) callback();
};

function f3(callback) {
    console.log('f3');
    if (callback) callback();
};

f1(f1callback);

function f1callback() {
    f2(f2callback);
};

function f2callback() {
    f3(f3callback);
};

function f3callback() {
    console.log('terminou!');
};